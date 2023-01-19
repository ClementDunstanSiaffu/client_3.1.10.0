/** @jsx jsx */
import { React, ImmutableObject, jsx, useIntl } from 'jimu-core'
import { Button, Checkbox, Label } from 'jimu-ui'
import { FlyItemMode, ItemsType } from '../../config'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import nls from '../translations/default'
// resources
import { RoutePointOutlined } from 'jimu-icons/outlined/gis/route-point'
import { AlongPathOutlined } from 'jimu-icons/outlined/gis/along-path'
import { RouteOutlined } from 'jimu-icons/outlined/directional/route'
import { UpOutlined } from 'jimu-icons/outlined/directional/up'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'

const { useEffect } = React

interface Props {
  styleConfig: ItemsType
  idx: number
  handleFlyModesChange: (isInUse: boolean, idx: number) => void

  // flyModes UI Collapse
  flyModesUICollapseMap: ImmutableObject<{id: number, isUICollapse: boolean}>
  handleToggleFlyModesUICollapse: (idx: number, isUICollapse: boolean) => void
}

export const ItemMode = (props: Props) => {
  const intl = useIntl()

  const { styleConfig, idx, flyModesUICollapseMap } = props
  const isInUse = styleConfig.isInUse
  const flyItemMode = styleConfig.name
  const isUICollapse = flyModesUICollapseMap.getIn([String(idx)])

  // collapse/unCollapse related to flyMode checkbox ,#6635
  useEffect(() => {
    let isUICollapse = true
    if (!isInUse) {
      isUICollapse = true
    } else {
      isUICollapse = false
    }
    props.handleToggleFlyModesUICollapse(idx, isUICollapse)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInUse])

  // innner funs
  const handleFlyModesChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    event.stopPropagation()
    props.handleFlyModesChange(!isInUse, idx)
  }
  const handleToggleFlyModesUICollapse = (isUICollapse: boolean, idx: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    props.handleToggleFlyModesUICollapse(idx, !isUICollapse)
  }
  const getIcon = (mode: FlyItemMode) => {
    switch (mode) {
      case FlyItemMode.Rotate: {
        return <RoutePointOutlined size='m' />
      }
      case FlyItemMode.Path: {
        return <AlongPathOutlined size='m' />
      }
      case FlyItemMode.Route: {
        return <RouteOutlined size='m' />
      }

      default: break
    }
  }
  const getLabel = (mode: FlyItemMode) => {
    switch (mode) {
      case FlyItemMode.Rotate: {
        return intl.formatMessage({ id: 'flyStyleRotate', defaultMessage: nls.flyStyleRotate })
      }
      case FlyItemMode.Path: {
        return intl.formatMessage({ id: 'flyStylePath', defaultMessage: nls.flyStylePath })
      }
      case FlyItemMode.Route: {
        return intl.formatMessage({ id: 'flyStyleRecord', defaultMessage: nls.flyStyleRecord })
      }

      default: break
    }
  }

  // renders
  const modeIcon = getIcon(flyItemMode)
  const label = getLabel(flyItemMode)
  const arrowIcon = (isUICollapse ? <DownOutlined size='s'></DownOutlined> : <UpOutlined size='s'></UpOutlined>)

  return (
    <SettingRow className='d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={evt => handleFlyModesChange(evt, idx)} >
        <Checkbox checked={isInUse} />
        <Label style={{ cursor: 'pointer' }}>
          <div className='m-2' >
            {modeIcon}
          </div>
          {label}
        </Label>
      </div>

      <Button icon disabled={!isInUse} style={{ backgroundColor: 'transparent', border: 'none' }}
        onClick={evt => handleToggleFlyModesUICollapse(isUICollapse, idx, evt)}>
        {arrowIcon}
      </Button>
    </SettingRow>
  )
}
