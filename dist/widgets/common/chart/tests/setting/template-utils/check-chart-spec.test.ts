import { JimuFieldType } from 'jimu-core'
import checkChartSpec from '../../../src/setting/settings/chart-type-selector/utils/check-chart-spec'

jest.mock('../../../src/utils/common', () => {
  return {
    ...jest.requireActual<Record<string, any>>('../../../src/utils/common'),
    getFieldType: (jimuFieldName, dataSourceId) => {
      if (jimuFieldName === 'date') {
        return JimuFieldType.Date
      } else {
        return JimuFieldType.String
      }
    }
  }
})

describe('checkChartSpec', () => {
  it('Check series type', () => {
    expect(checkChartSpec({
      series: []
    } as any).error).toBe('Invalid series type')

    expect(checkChartSpec({
      series: [{ type: 'histogramSeries' }]
    } as any).error).toBe('Unsupported type: histogramSeries.')

    expect(checkChartSpec({
      series: [{ type: 'barSeries' }]
    } as any).valid).toBe(true)
  })

  it('Check series where', () => {
    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        query: {
          where: '1=1'
        }
      }]
    } as any).valid).toBe(true)

    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        query: {}
      }]
    } as any).valid).toBe(true)

    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        query: {
          where: 'field="foo"'
        }
      }]
    } as any).error).toBe('Check that there is where in the series: field="foo", split by field is not supported now')
  })

  it('Check series color type', () => {
    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        colorType: 'singleColor'
      }]
    } as any).valid).toBe(true)

    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        colorType: 'colorMatch'
      }]
    } as any).warning).toBe('Unsupported color type: colorMatch, will fallback to "singleColor"')
  })

  it('Check series field', () => { })

  it('Check chart query', () => {
    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        query: {
          groupByFieldsForStatistics: ['foo'],
          outStatistics: [{
            statisticType: 'sum',
            onStatisticField: 'bar',
            outStatisticFieldName: 'bar_sum'
          }]
        }
      }]
    } as any).valid).toBe(true)

    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        query: {
          groupByFieldsForStatistics: ['foo']
        }
      }]
    } as any).error).toBe('No aggregation is not supported now.')

    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        query: {
          groupByFieldsForStatistics: ['foo'],
          outStatistics: [{
            statisticType: 'percentile_cont',
            onStatisticField: 'bar',
            outStatisticFieldName: 'bar_percentile_cont'
          }]
        }
      }]
    } as any).error).toBe('Unsupported statistic type: percentile_cont.')
  })

  it('Check chart query with date field', () => {
    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        x: 'foo'
      }]
    } as any).valid).toBe(true)

    expect(checkChartSpec({
      series: [{
        type: 'barSeries',
        x: 'date'
      }]
    } as any).error).toBe('Date field is not supported.')
  })
})
