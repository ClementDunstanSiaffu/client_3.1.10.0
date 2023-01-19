/**@jsx jsx */
import { React, jsx, css, ImmutableObject, Immutable, ImmutableArray, JimuFieldType } from 'jimu-core'
import { ColorsSelector } from './colors-selector'
import { applyPieSlicesColors, getPieSlice, LoadSlices } from '../utils'
import { ColorAdder } from './color-adder'
import { ColorItem } from './color-item'
import { hooks, Loading, LoadingType, ValidityResult } from 'jimu-ui'
import { ISimpleFillSymbol } from '@esri/arcgis-rest-types'
import { ByFieldColorListProps } from './by-field'
import defaultMessages from '../../../../../../../translations/default'
import { ColorLoader } from './color-loader'
import { WebChartPieChartSlice } from 'jimu-ui/advanced/chart'

export interface ByGroupColorListProps extends ByFieldColorListProps {
  categoryFieldType: JimuFieldType
  loading?: boolean
  loadable?: boolean
  loadSlices?: LoadSlices
  value: ImmutableArray<WebChartPieChartSlice>
  colors: string[]
  other?: ImmutableObject<ISimpleFillSymbol>
  onOtherChange: (value: ImmutableObject<ISimpleFillSymbol>) => void
}

const defaultValue = Immutable([]) as ImmutableArray<WebChartPieChartSlice>

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: var(--dark-800);
  > .body {
    width: 100%;
    height: calc(100% - 43px);
    > .color-list {
      width: 100%;
      max-height: 85%;
      overflow-y: auto;
      .color-other-item {
        width: 88%;
      }
   }
  }
  > .footer {
    height: 43px;
    width: 100%;
    border-top: 1px solid #6a6a6a;
    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .colors-selector {
        width: 80%;
      }
    }
  }
`
export const ByGroupColorList = (props: ByGroupColorListProps): React.ReactElement => {
  const {
    categoryFieldType,
    loading,
    value: propValue = defaultValue,
    other,
    colors,
    onChange,
    loadSlices,
    onOtherChange,
    onColorsChange
  } = props

  const translate = hooks.useTranslate(defaultMessages)
  const listCount = Object.keys(propValue).length
  const ref = React.useRef<HTMLDivElement>(null)
  const unmountRef = React.useRef<boolean>(false)
  hooks.useUnmount(() => { unmountRef.current = true })

  const undefinedSlice = React.useMemo(() => {
    return Immutable({
      sliceId: 'undefined',
      label: translate('undefined'),
      fillSymbol: other as any
    }) as ImmutableObject<WebChartPieChartSlice>
  }, [other, translate])

  const handleChange = (index: number, slice: ImmutableObject<WebChartPieChartSlice>) => {
    const slices = Immutable.set(propValue, index, slice)
    onChange?.(slices)
  }

  const handleColorsChange = (colors: string[]) => {
    onColorsChange?.(colors)
    const slices = applyPieSlicesColors(propValue, colors)
    onChange?.(slices)
  }

  const validity = React.useCallback(
    (value): ValidityResult => {
      value = value.trim()
      if (!value) {
        return {
          valid: false,
          msg: translate('categoryEmpty')
        }
      }
      const existed = !!propValue?.find(slice => slice.sliceId === value)
      if (existed) {
        return {
          valid: false,
          msg: translate('categoryExist')
        }
      }
      return { valid: true }
    },
    [propValue, translate]
  )

  const handleColorAdded = (key: string) => {
    if (!key) return
    const index = Object.keys(propValue).length
    const slice = getPieSlice(index, colors, key)
    const slices = propValue.concat(slice)
    onChange?.(slices)
  }

  const handleDelete = (sliceId: string) => {
    const slices = propValue?.filter(slice => slice.sliceId !== sliceId)
    onChange?.(slices)
  }

  const handleOtherChange = (value: ImmutableObject<WebChartPieChartSlice>) => {
    const color = value.fillSymbol.color
    const symbol = other?.set('color', color)
    onOtherChange?.(symbol)
  }

  React.useEffect(() => {
    const nodes = ref.current.querySelectorAll('.color-item')
    const node = nodes[listCount - 2]
    node?.scrollIntoView()
  }, [listCount])

  return (
    <div className='color-match' css={style}>
      <div className='body'>
        <div className='color-list px-3' ref={ref}>
          {propValue.map((slice, index) => {
            return (
              <ColorItem
                key={index}
                deletable={true}
                className='mb-2'
                value={slice}
                onChange={(val) => handleChange(index, val)}
                onDelete={(sliceId) => handleDelete(sliceId)}
              />
            )
          })}
          <ColorItem
            className='mb-2 color-other-item'
            value={undefinedSlice}
            deletable={false}
            onChange={handleOtherChange}
          />
        </div>
        <ColorAdder
          className='px-3'
          categoryFieldType={categoryFieldType}
          validity={validity}
          onChange={handleColorAdded}
        />
      </div>

      <div className='footer'>
        <div className='px-3'>
          <ColorLoader className='my-2' loadSlices={loadSlices} onChange={onChange}></ColorLoader>
          <ColorsSelector className='my-2' onChange={handleColorsChange} />
        </div>
      </div>
      {loading && <Loading type={LoadingType.Secondary} />}
    </div>
  )
}
