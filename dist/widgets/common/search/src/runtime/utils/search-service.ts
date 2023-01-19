import { QueriableDataSource, i18n, DataSource, dataSourceUtils, ClauseLogic, ClauseOperator, Immutable, SqlResult, QueryParams, FeatureLayerDataSource, DataSourceStatus, FieldSchema, QueryOptions, QueryScope, JimuFieldType } from 'jimu-core'
import { IMConfig, SuggestionItem, Suggestion, IMSearchDataConfig, DatasourceListItem } from '../../config'
import { getDatasource, uniqueJson, checkIsSuggestionRepeat, getSuggestionItem, checkIsDsCreated } from './utils'

export interface QueryOption {
  returnGeometry?: boolean
  geometry?: any
  sortField?: string
  sortOrder?: string
  orderByFields?: string | string[]
  resultOffset?: number
  resultRecordCount?: number
  pageSize?: number
  page?: number
  where?: string
}

export async function fetchLayerSuggestion (
  searchText: string,
  config: IMConfig,
  serviceListItem: DatasourceListItem
): Promise<Suggestion> {
  const datasourceConfig = config?.datasourceConfig || []
  if (!checkIsDsCreated(serviceListItem?.useDataSource?.dataSourceId)) {
    return Promise.resolve({} as Suggestion)
  }
  const searchFields = serviceListItem?.searchFields || []
  const datasourceConfigItem = datasourceConfig?.filter(item => item?.configId === serviceListItem.configId)?.[0]
  return fetchSuggestionRecords(searchText, serviceListItem, datasourceConfigItem, searchFields, config?.maxSuggestions)
}

/**
 * Query suggestion
*/
export async function fetchSuggestionRecords (
  searchText: string,
  datasourceListItem: DatasourceListItem,
  dsConfigItem: IMSearchDataConfig,
  searchFields: FieldSchema[],
  maxSuggestions: number
): Promise<Suggestion> {
  const { label, icon, configId } = dsConfigItem
  const useDatasourceId = datasourceListItem?.useDataSource?.dataSourceId
  const datasource = getDatasource(useDatasourceId)
  const SQL = datasourceListItem?.SuggestionSQL
  const options: any = {
    outFields: searchFields.map(field => field.name),
    returnDistinctValues: true,
    returnGeometry: false,
    orderByFields: null
  }
  if (SQL?.sql || typeof (SQL?.sql) === 'string') {
    options.where = SQL?.sql
  }

  const searchReg = new RegExp(`(${searchText})`, 'gi')
  return queryRecords(options, datasource).then(async records => {
    let searchSuggestion: SuggestionItem[] = []
    searchFields.forEach(field => {
      records.forEach(record => {
        const intl = i18n.getIntl()
        const suggestionRecord = record.getFormattedFieldValue(field?.name, intl)
        if (suggestionRecord && !checkIsSuggestionRepeat(searchSuggestion, suggestionRecord) && suggestionRecord.match(searchReg)) {
          const layerSuggestion: SuggestionItem = {
            suggestionHtml: getSuggestionItem(suggestionRecord, searchText),
            suggestion: suggestionRecord,
            configId: configId,
            isFromSuggestion: true
          }
          searchSuggestion.push(layerSuggestion)
        }
      })
    })
    searchSuggestion = uniqueJson(searchSuggestion, 'suggestion')
    const newSearchSuggestion = searchSuggestion.splice(0, maxSuggestions)
    const suggestion: Suggestion = {
      suggestionItem: newSearchSuggestion,
      layer: label,
      icon: icon
    }
    return Promise.resolve(suggestion)
  }).catch((error) => {
    return Promise.resolve({
      suggestionItem: [],
      layer: null,
      icon: null
    })
  })
}

/**
 * Get query SQL
*/
export function getSQL (
  searchText: string,
  searchFields: FieldSchema[],
  datasource: DataSource,
  searchExact: boolean
): SqlResult {
  if (searchFields) {
    const clauses = []
    searchFields.forEach(field => {
      let newSearchText = searchText
      const codedValues = (datasource as FeatureLayerDataSource)?.getFieldCodedValueList(field?.name)
      if (codedValues) {
        codedValues?.forEach(item => {
          if (newSearchText === item?.label) {
            newSearchText = item?.value as any
          }
        })
      }
      if (field.type === JimuFieldType.Number && !Number(newSearchText)) return false
      const clauseOperator = getClauseOperator(field.type, searchExact)
      const searchValue = field.type === JimuFieldType.Number ? Number(newSearchText) : newSearchText
      const clause = dataSourceUtils.createSQLClause(field?.name, clauseOperator, searchValue)
      clauses.push(clause)
    })
    const sqlExpression = dataSourceUtils.createSQLExpression(ClauseLogic.Or, clauses)
    const SQL = dataSourceUtils.getArcGISSQL(sqlExpression as any, datasource)
    return SQL
  }
}

/**
 * Update datasource params
*/
export function updateDsQueryParams (serviceListItem: DatasourceListItem, id: string, searchText: string) {
  const useDataSourceId = serviceListItem?.useDataSource?.dataSourceId
  const useDataSource = getDatasource(useDataSourceId)
  const SQL = serviceListItem?.SQL
  const where = !searchText ? '1=1' : (SQL?.sql || '1=0')
  const query: any = Immutable({
    outFields: ['*'],
    where: where,
    returnGeometry: true
  })

  //Update datasource query params
  useDataSource && (useDataSource as QueriableDataSource).updateQueryParams(query, id)
}

/**
 * Load records by outputDatasources
*/
export const loadDsRecords = (serviceListItem: DatasourceListItem, resultMaxNumber: number, id: string) => {
  const dsId = serviceListItem?.useDataSource?.dataSourceId
  if (!checkIsDsCreated(dsId)) return Promise.resolve({})
  const ds = getDatasource(dsId) as QueriableDataSource
  const query = {
    where: serviceListItem?.SQL?.sql || '1=0',
    pageSize: resultMaxNumber,
    page: 1,
    returnGeometry: true
  }
  return ds?.load(query, { widgetId: id }).then(records => {
    return Promise.resolve({
      records: records,
      configId: serviceListItem.configId,
      dsId: dsId,
      isGeocodeRecords: false
    })
  })
}

function getClauseOperator (fieldType: JimuFieldType, searchExact: boolean): ClauseOperator {
  let clauseOperator: ClauseOperator
  if (fieldType === JimuFieldType.Number) {
    clauseOperator = ClauseOperator.NumberOperatorIs
  } else if (fieldType === JimuFieldType.String) {
    clauseOperator = searchExact ? ClauseOperator.StringOperatorIs : ClauseOperator.StringOperatorContains
  }
  return clauseOperator
}

/**
 * Query record by datasource
*/
async function queryRecords (q: any, ds: DataSource): Promise<any> {
  if (!ds) return await Promise.resolve([])
  return await (ds as QueriableDataSource)
    .query(q, { scope: QueryScope.InRuntimeView } as QueryOptions)
    .then(async queryResult => await queryRecordsResult(q, queryResult))
}

async function queryRecordsResult (q, queryResult): Promise<any> {
  return await Promise.resolve(queryResult?.records || [])
}

export async function executeCountQuery (
  widgetId: string,
  outputDS: FeatureLayerDataSource,
  queryParams: QueryParams
): Promise<number> {
  outputDS.setCountStatus(DataSourceStatus.Unloaded)
  return outputDS.loadCount(queryParams, { widgetId, refresh: true })
}

export function initOutputDatasource (config: IMConfig) {
  config?.datasourceConfig?.forEach(datasourceConfigItem => {
    const outputDs = datasourceConfigItem?.outputDataSourceId
    const outputDatasource = getDatasource(outputDs)
    outputDatasource && outputDatasource.setCountStatus(DataSourceStatus.Loaded)
  })
}
