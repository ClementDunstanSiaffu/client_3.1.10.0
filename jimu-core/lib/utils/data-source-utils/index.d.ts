import { IFeatureLayer, IField, IFieldInfo, IItem, ILayerDefinition, IPopupInfo } from '@esri/arcgis-rest-types';
import { FieldSchema, IMFieldSchema, IMDataSourceJson, IMUseDataSource } from '../../types/app-config';
import { ServiceDefinition } from '../../types/service-definition';
import { EsriFieldType, EsriDateFormats } from '../../types/common';
import { CodedValue, AttachmentInfo, AttachmentQueryOptions, DataSourceTypes, DataSource, QueryScope, FeatureLayerDataSource, SceneLayerDataSource, MapServiceDataSource, ItemMixin, TimeExtent } from '../../data-sources/data-source-interface';
import { IntlShape } from 'react-intl';
import { getWhetherUseProxy } from '../proxy-utils';
export declare function queryAllAttachments(attachmentQuery: AttachmentQueryOptions): Promise<AttachmentInfo[]>;
export declare function filterAttachments(attachmentInfos: AttachmentInfo[], attachmentQuery: AttachmentQueryOptions): Promise<AttachmentInfo[]>;
export interface DisplayValueObj {
    value: any;
    displayValue: string;
    isCodedValueOrSubtype: boolean;
}
export declare function convertFieldToJimuField(field: IField, fieldInfo: IFieldInfo): FieldSchema;
export declare function isNumericalField(fieldType: EsriFieldType): boolean;
export declare function getFieldInfoByFieldName(fieldInfos: IField[], fieldName: string): IField;
export declare function getDisplayValueForCodedValueOrSubtype(layerDefinition: ServiceDefinition, fieldName: string, record: any): DisplayValueObj;
export declare function getDisplayValueForCodedValueOrSubtypeBatch(layerDefinition: ServiceDefinition, fieldName: string, recordList: any[]): DisplayValueObj[];
export declare function getCodedValueListForCodedValueOrSubtypeField(layerDefinition: ServiceDefinition, fieldName: string, record?: any): CodedValue[];
export declare function isAGOLHostedService(url: string): boolean;
export declare function fixLayerId(layerId: string): string;
/**
 * Sublayer's id is type of number. Layer's id is type of string.
 * The function is used to generate jimuChildId by js api layer.
 */
export declare function getFixedLayerIdByLayer(layer: {
    id?: string | number;
    title?: string;
    name?: string;
}): string;
/**
 * The function is used to generate jimuChildId by layer definition.
 */
export declare function getFixedLayerIdByLayerDefinition(layerDefinition: ServiceDefinition): string;
/**
 * The function is used to generate jimuChildId by layer definition.
 */
export declare function _getFixedLayerIdByLayerDefinition(layerDefinition: ServiceDefinition): string;
/**
 * Get whether a layer in a service is supported,
 * which means, the layer can be converted to a data source.
 *
 * e.g. a single layer service https://sampleserver6.arcgisonline.com/arcgis/rest/services/911CallsHotspot/MapServer/2,
 * the service (map service) is a supported service type , however, the layer type (raster layer) is not supported, will return false.
 *
 * e.g. a single layer service https://sampleserver6.arcgisonline.com/arcgis/rest/services/911CallsHotspot/MapServer/1,
 * the service (map service) is a supported service type , and, the layer type (feature layer) is also supported, will return true.
 */
export declare function isLayerDefinitionTypeSupported(layerDefinition: ServiceDefinition): boolean;
export declare function isJSAPILayerTypeSupported(layer: __esri.Layer): boolean;
/**
 * @ignore
 * Get service url end up with layer id or url without layer id,
 * which depends on param `addIdToEnd`.
 */
export declare function getFullServiceUrl(url: string, addIdToEnd: boolean, layerDefinition?: ServiceDefinition): string;
/**
 * @ignore
 * Get data source json from layer definition,
 * only supported layer definitions can be converted to data source json.
 */
export declare function getSingleDsJsonFromLayerDefinition(dsId: string, url: string, layerDefinition: ServiceDefinition, dsJsonInConfig?: IMDataSourceJson): IMDataSourceJson;
export declare function getSingleDsJsonFromWholeServiceDefinition(dsId: string, url: string, serviceDefinition: ServiceDefinition, dsJsonInConfig?: IMDataSourceJson): IMDataSourceJson;
export declare function getDsTypeFromWholeServiceUrl(url: string): DataSourceTypes;
/**
 * @ignore
 */
export declare function fetchSupportedLayerDefinitionsFromUrls(urls: string[], itemId?: string, portalUrl?: string): Promise<{
    [url: string]: ServiceDefinition;
}>;
/**
 * @ignore
 * Get supported child layer definitions from a service,
 * `supported` means, layer definitions can be coverted to data source.
 */
export declare function fetchSupportedLayerDefinitions(url: string, serviceDefinition: ServiceDefinition): Promise<{
    [url: string]: ServiceDefinition;
}>;
/**
 * @ignore
 * Indicate whether is a supported single layer service,
 * e.g. https://servicesdev.arcgis.com/VxZfyyZuOsDEPxG8/ArcGIS/rest/services/features_(1)/FeatureServer/0 -> true
 * e.g. https://servicesdev.arcgis.com/VxZfyyZuOsDEPxG8/ArcGIS/rest/services/features_(1)/FeatureServer -> false
 * e.g. https://services2.arcgis.com/z2tnIkrLQ2BRzr6P/ArcGIS/rest/services/CampusViewer_IndoorData/SceneServer/layers -> false
 * e.g. https://services2.arcgis.com/z2tnIkrLQ2BRzr6P/ArcGIS/rest/services/CampusViewer_IndoorData/SceneServer -> false
 * e.g. https://services2.arcgis.com/z2tnIkrLQ2BRzr6P/ArcGIS/rest/services/CampusViewer_IndoorData/SceneServer/layers/0 -> true
*/
export declare function isSupportedSingleLayerService(url: string): boolean;
/**
 * @ignore
 * Indicate whether is a supported whole service,
 * whole service means is not a single layer service,
 * e.g. https://servicesdev.arcgis.com/VxZfyyZuOsDEPxG8/ArcGIS/rest/services/features_(1)/FeatureServer/0 -> false (is a single layer service)
 * e.g. https://servicesdev.arcgis.com/VxZfyyZuOsDEPxG8/ArcGIS/rest/services/features_(1)/FeatureServer -> true
 * e.g. https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer -> true
 */
export declare function isSupportedWholeService(url: string): boolean;
/**
 * @ignore
 * Return service label from url,
 * e.g. https://servicesdev.arcgis.com/VxZfyyZuOsDEPxG8/ArcGIS/rest/services/features_(1)/FeatureServer/0 -> features_(1)
 * e.g. https://servicesdev.arcgis.com/VxZfyyZuOsDEPxG8/ArcGIS/rest/services/features_(1)/FeatureServer -> features_(1)
 * e.g. https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer -> World_Terrain_Base
 * e.g. https://services2.arcgis.com/z2tnIkrLQ2BRzr6P/ArcGIS/rest/services/CampusViewer_IndoorData/SceneServer/layers/0 -> CampusViewer_IndoorData
 */
export declare function getServiceLabelFromUrl(url: string): string;
export declare function isSupportedService(url: string): boolean;
export declare function getSortedArrayByLabel<T extends {
    getLabel: () => string;
}>(arr: T[]): T[];
export declare function getChildDataSourceId(parentDsId: string, jimuChildId: string): string;
/**
 * @ignore
 */
export declare function queryFeatureCountByField(field: IMFieldSchema, selectedDs: DataSource, sql?: string, queryScope?: QueryScope, widgetId?: string): Promise<number>;
/**
 * @ignore
 */
export declare function queryValueLabelsByFieldAndPageSize(field: IMFieldSchema, selectedDs: DataSource, pageSize: number, intl: IntlShape, sql?: string, queryScope?: QueryScope, widgetId?: string): Promise<{
    list: CodedValue[];
    reducedCount: number;
}>;
export declare function getUrlByLayer(layer: __esri.Sublayer | __esri.Layer): string;
/**
 * If use a global data source, the real data source id is `useDataSource.dataSourceId`.
 * If use a local data source, the real data source id is different from `useDataSource.dataSourceId`.
 */
export declare function getRealDataSourceId(useDataSource: IMUseDataSource, localId?: string): string;
export declare function fetchAssociatedFeatureLayerDefinition(sceneLayerUrl: string, sceneLayerId: string, sceneLayerItemId: string, sceneLayerPortalUrl: string): Promise<{
    def: ServiceDefinition;
    url: string;
}>;
/**
 * Scene layer url should be proxy url if should use proxy (in app instead of builder).
 * Will return associated feature layer's proxy url if should use proxy (in app instead of builder).
 */
export declare function fetchAssociatedFeatureLayerUrl(sceneLayerUrl: string, sceneLayerId: string, sceneLayerItemId: string, sceneLayerPortalUrl: string): Promise<string>;
/**
 * Assume that scene layer has an associated feature layer.
 * Will return associated feature layer's proxy url if should use proxy (in app instead of builder).
 */
export declare function getAssumedAssociatedLayerUrl(sceneLayerUrl: string): string;
export declare function fetchAssociatedFeatureServicePortalItem(sceneLayerItemId: string, sceneLayerPortalUrl: string): Promise<IItem>;
/**
 * Added this to support Pro-published group FeatureServers - in this case the
 * layer ids are not 0,1,2.. but instead 1,2,3... -> we need to query the Feature
 * Server for the right layer id before we use it as an associated feature layer;
 */
export declare function findAssociatedFeatureLayerUrl(featureLayerUrl: string, sceneLayerUrl: string, sceneLayerId: string): Promise<string>;
export declare function getDataSourceProxyUrl(sourceUrl: string): string;
export declare function getDataSourceSourceUrl(url: string): string;
/**
 * Whether the data source's original data is a layer. Such as feature layer, scene layer, group layer and so on.
 * Layer data source should have layer object from ArcGIS JS API or service definition from ArcGIS Rest API.
 */
export declare function isLayerDataSource(dataSource: DataSource): boolean;
export declare function getOriginDataLabel(serviceDefinition: ServiceDefinition, layer: __esri.Layer | __esri.Sublayer, ds: DataSource & ItemMixin): Promise<string>;
/**
 * If layer is sublayer, return layer of it, or, return null.
 */
export declare function getJSAPILayerBySublayer(layer: __esri.Layer | __esri.Sublayer): __esri.Layer;
/**
 * If data source object is not created, only have data source id, can use this method to get whether data source is derived from another data source.
 * E.g. data view is derived from main data soruce.
 */
export declare function isDerivedFrom(baseDsId: string, derivedDsId: string): boolean;
export declare function isSelectionView(dsId: string): boolean;
export declare function supportSymbol(dataSource: FeatureLayerDataSource | SceneLayerDataSource): boolean;
export declare function supportAttachment(dataSource: FeatureLayerDataSource | SceneLayerDataSource): boolean;
export declare function supportTime(dataSource: FeatureLayerDataSource | MapServiceDataSource): boolean;
/**
 * A null value specified for start time or end time will represent infinity for start or end time.
 * Return -1, indicates t1 and t2 have no intersection.
 */
export declare function mergeTimeExtent(t1: TimeExtent, t2: TimeExtent): TimeExtent;
export declare function findMapServiceDataSource(subLayerDataSource: DataSource): MapServiceDataSource;
export declare function getJSAPILayer(dataSource: FeatureLayerDataSource | SceneLayerDataSource): __esri.FeatureLayer | __esri.SceneLayer;
export declare function getRestAPILayer(dataSource: FeatureLayerDataSource): IFeatureLayer;
export declare function getLayerDefinition(dataSource: FeatureLayerDataSource | SceneLayerDataSource): ILayerDefinition;
export declare function getPopupInfo(dataSource: FeatureLayerDataSource | SceneLayerDataSource): IPopupInfo;
/**
 * Return a new popup info, which fields are intersection of data source fields and provided popup info fields.
 */
export declare function getPopupInfoIntersection(popupInfo: IPopupInfo, dataSource: FeatureLayerDataSource | SceneLayerDataSource): IPopupInfo;
/**
 * Return a new layer definition, which fields are intersection of data source fields and provided layer definition fields.
 */
export declare function getLayerDefinitionIntersection(layerDef: ILayerDefinition, dataSource: FeatureLayerDataSource | SceneLayerDataSource): ILayerDefinition;
/**
 * Return the related main data source which contains information about original AGOL/portal item or original remote database.
 * - For output data source, if it only has one origin data source and its schema isn't changed (comparing with the origin scehma), will continue checking using the origin data source.
 * - For data view and local data source, will return main data source.
 */
export declare function getRelatedMainDataSourceWithOriginInfo(dataSource: FeatureLayerDataSource | SceneLayerDataSource): FeatureLayerDataSource | SceneLayerDataSource;
/**
 * Create a JS API layer from a data source, the layer will use the same filter with the data source if `useDataSourceQueryParams` is true.
 * Always create a new JS API layer even if the data source has one.
 */
export declare function createJSAPILayerByDataSource(ds: FeatureLayerDataSource | SceneLayerDataSource, useDataSourceQueryParams?: boolean): Promise<__esri.FeatureLayer | __esri.SceneLayer>;
/**
 * Create a Rest API layer from a data source.
 * Always create a new Rest API layer even if the data source has one.
 */
export declare function createRestAPILayerByDataSource(ds: FeatureLayerDataSource): IFeatureLayer;
export declare function createJSAPIFeatureLayerByDataSourceFromFeatureCollectionItem(ds: FeatureLayerDataSource): Promise<__esri.FeatureLayer>;
export declare function formatDateField(value: any, esriDateFormat: EsriDateFormats, intl: IntlShape): string;
export * from './rest-api-and-js-api-types-utils';
export * from './sql-utils';
export * from './sql-expression-factory';
export { getWhetherUseProxy };
