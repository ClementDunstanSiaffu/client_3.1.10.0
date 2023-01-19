/** @jsx jsx */
import {
  React,
  jsx,
  css,
  classNames
} from 'jimu-core'
import {
  SettingChangeFunction
} from 'jimu-for-builder'
import {
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { getTheme2 } from 'jimu-theme'
import { BorderSetting, BackgroundSetting, InputUnit } from 'jimu-ui/advanced/style-setting-components'
import { Switch, Select, DistanceUnits, LinearUnit, Icon, Button, NumericInput, Collapse, utils as uiUtils } from 'jimu-ui'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import { IMSidebarConfig, SidebarType, CollapseSides } from '../config'
import { PREDEFINED_TOGGLE_STYLE } from './toggle-button-config'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'
import { DownFilled } from 'jimu-icons/filled/directional/down'
import { DownDoubleOutlined } from 'jimu-icons/outlined/directional/down-double'

const availableUnits = [DistanceUnits.PIXEL]

const STYLE_NAMES = ['default', 'rect']

const iconTop = require('./assets/sidebar-top.svg')
const iconBottom = require('./assets/sidebar-bottom.svg')
const iconLeft = require('./assets/sidebar-left.svg')
const iconRight = require('./assets/sidebar-right.svg')

const inputStyle = { width: '7.5rem' }

interface Props {
  widgetId: string
  // direction: SidebarType;
  config: IMSidebarConfig
  onSettingChange: SettingChangeFunction
  formatMessage: (id: string) => string
}

function findToggleBtnStyle (direction: SidebarType, side: CollapseSides) {
  if (direction === SidebarType.Horizontal) {
    return side === CollapseSides.First ? PREDEFINED_TOGGLE_STYLE.left : PREDEFINED_TOGGLE_STYLE.right
  }
  return side === CollapseSides.First ? PREDEFINED_TOGGLE_STYLE.top : PREDEFINED_TOGGLE_STYLE.bottom
}

export default class Setting extends React.PureComponent<Props> {
  selectedToggleBtnStyle: string

  constructor (props) {
    super(props)
    this.selectedToggleBtnStyle = 'default'
  }

  dockHorizontalLeft = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Horizontal || side !== CollapseSides.First) {
      this.updateDockside(SidebarType.Horizontal, CollapseSides.First)
    }
  }

  dockHorizontalRight = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Horizontal || side !== CollapseSides.Second) {
      this.updateDockside(SidebarType.Horizontal, CollapseSides.Second)
    }
  }

  dockVerticalTop = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Vertical || side !== CollapseSides.First) {
      this.updateDockside(SidebarType.Vertical, CollapseSides.First)
    }
  }

  dockVerticalBottom = () => {
    const { config } = this.props
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First

    if (direction !== SidebarType.Vertical || side !== CollapseSides.Second) {
      this.updateDockside(SidebarType.Vertical, CollapseSides.Second)
    }
  }

  updateDockside (direction: SidebarType, side: CollapseSides) {
    const { config } = this.props
    const toggleBtnTemplate = config.toggleBtn.template || STYLE_NAMES[0]
    const toggleStyle = findToggleBtnStyle(direction, side)[toggleBtnTemplate]
    let newConfig = this.updateToggleBtnStyles(toggleStyle)
    newConfig = newConfig.set('direction', direction).set('collapseSide', side)
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: newConfig
    })
  }

  updateToggleBtnStyles (style) {
    const { config } = this.props
    let newConfig = config;
    [
      'offsetX',
      'offsetY',
      'position',
      'width',
      'height',
      'icon',
      'expandStyle',
      'collapseStyle'
    ].forEach((prop) => {
      newConfig = newConfig.setIn(['toggleBtn', prop], style[prop])
    })
    return newConfig
  }

  updateDefaultState = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('defaultState', +e.target.value)
    })
  }

  updateOverlay = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('overlay', e.target.checked)
    })
  }

  updateResizable = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('resizable', e.target.checked)
    })
  }

  updateSize = (value: LinearUnit) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.set('size', `${value.distance}${value.unit}`)
    })
  }

  updateToggleBtn (prop: string, value: any) {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', prop], value)
    })
  }

  updateControllerPos = (e) => {
    this.updateToggleBtn('position', e.target.value)
  }

  updateControllerOffsetX = (value: number) => {
    this.updateToggleBtn('offsetX', value)
  }

  updateControllerOffsetY = (value: number) => {
    this.updateToggleBtn('offsetY', value)
  }

  updateControllerWidth = (value: number) => {
    this.updateToggleBtn('width', value)
  }

  updateControllerHeight = (value: number) => {
    this.updateToggleBtn('height', value)
  }

  updateControllerIconSize = (value: number) => {
    this.updateToggleBtn('iconSize', value)
  }

  updateFirstPanelBg = (bg) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['firstPanelStyle', 'background'], bg)
    })
  }

  updateSecondPanelBg = (bg) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['secondPanelStyle', 'background'], bg)
    })
  }

  updateToggleBtnBg = (bg) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config
        .setIn(['toggleBtn', 'color', 'normal', 'bg', 'color'], bg)
        .setIn(['toggleBtn', 'color', 'normal', 'bg', 'useTheme'], false)
    })
  }

  updateToggleBtnHoverBg = (bg) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config
        .setIn(['toggleBtn', 'color', 'hover', 'bg', 'color'], bg)
        .setIn(['toggleBtn', 'color', 'hover', 'bg', 'useTheme'], false)
    })
  }

  updateToggleBtnBorder = (borderStyle) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', 'border'], borderStyle)
    })
  }

  updateToggleBtnIcon = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', 'iconSource'], +e.target.value)
    })
  }

  updateToggleBtnIconColor = (color) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', 'color', 'normal', 'icon', 'color'], color)
    })
  }

  updateDividerStyle = (borderStyle) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['divider', 'lineStyle'], borderStyle)
    })
  }

  updateDividerVisible = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['divider', 'visible'], e.target.checked)
    })
  }

  updateToggleBtnVisible = (e) => {
    this.props.onSettingChange({
      id: this.props.widgetId,
      config: this.props.config.setIn(['toggleBtn', 'visible'], e.target.checked)
    })
  }

  getStyle () {
    return css`
      .toggle-btn-style {
        background: var(--light-200);
        width: 108px;
        height: 30px;
        cursor: pointer;

        &.selected {
          outline: 2px solid var(--primary-600);
        }
      }
    `
  }

  useDefaultToggleStyle = () => {
    const { config } = this.props
    if (config.toggleBtn.template !== STYLE_NAMES[0]) {
      const toggleStyle = findToggleBtnStyle(config.direction, config.collapseSide)[STYLE_NAMES[0]]
      let newConfig = this.updateToggleBtnStyles(toggleStyle)
      newConfig = newConfig.setIn(['toggleBtn', 'template'], STYLE_NAMES[0])
      this.props.onSettingChange({
        id: this.props.widgetId,
        config: newConfig
      })
    }
  }

  useRectToggleStyle = () => {
    const { config } = this.props
    if (config.toggleBtn.template !== STYLE_NAMES[1]) {
      const toggleStyle = findToggleBtnStyle(config.direction, config.collapseSide)[STYLE_NAMES[1]]
      let newConfig = this.updateToggleBtnStyles(toggleStyle)
      newConfig = newConfig.setIn(['toggleBtn', 'template'], STYLE_NAMES[1])
      this.props.onSettingChange({
        id: this.props.widgetId,
        config: newConfig
      })
    }
  }

  getDocksideStyle () {
    return css`
      .dock-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 30px;
        cursor: pointer;
        background: var(--light-200);
        border: none;

        &.selected {
          outline: 2px solid var(--primary-600);
        }
        &:hover {
          background: var(--light-200);
        }
      }
    `
  }

  render () {
    const { config, formatMessage } = this.props

    const appTheme = getTheme2()
    const toggleBtnTemplate = config.toggleBtn.template || STYLE_NAMES[0]
    const direction = config.direction || SidebarType.Horizontal
    const side = config.collapseSide || CollapseSides.First
    const isHorizontal = direction === SidebarType.Horizontal

    return (
      <div className='hsidebar-layout-setting' css={this.getStyle()}>
        <SettingSection title={formatMessage('panel')} role='group' aria-label={formatMessage('panel')}>
          <SettingRow label={formatMessage('dockSide')} flow='wrap'>
            <div className='d-flex justify-content-between w-100' css={this.getDocksideStyle()}>
              <Button
                className={classNames('dock-btn', { selected: isHorizontal && side === CollapseSides.First })}
                onClick={this.dockHorizontalLeft}
                aria-label={formatMessage('left')}
                aria-pressed={isHorizontal && side === CollapseSides.First}
                icon
              >
                <Icon icon={iconLeft} width={30} height={18} currentColor={false} autoFlip />
              </Button>
              <Button
                className={classNames('dock-btn', { selected: isHorizontal && side === CollapseSides.Second })}
                onClick={this.dockHorizontalRight}
                aria-label={formatMessage('right')}
                aria-pressed={isHorizontal && side === CollapseSides.Second}
                icon
              >
                <Icon icon={iconRight} width={30} height={18} currentColor={false} autoFlip />
              </Button>
              <Button
                className={classNames('dock-btn', { selected: !isHorizontal && side === CollapseSides.First })}
                onClick={this.dockVerticalTop}
                aria-label={formatMessage('top')}
                aria-pressed={!isHorizontal && side === CollapseSides.First}
                icon
              >
                <Icon icon={iconTop} width={22} height={20} currentColor={false} />
              </Button>
              <Button
                className={classNames('dock-btn', { selected: !isHorizontal && side === CollapseSides.Second })}
                onClick={this.dockVerticalBottom}
                aria-label={formatMessage('bottom')}
                aria-pressed={!isHorizontal && side === CollapseSides.Second}
                icon
              >
                <Icon icon={iconBottom} width={22} height={20} currentColor={false} />
              </Button>
            </div>
          </SettingRow>
          <SettingRow label={formatMessage('size')}>
            <InputUnit aria-label={formatMessage('size')} units={availableUnits} value={uiUtils.stringOfLinearUnit(config.size)} style={inputStyle} onChange={this.updateSize} />
          </SettingRow>
          <SettingRow label={formatMessage('overlay')}>
            <Switch aria-label={formatMessage('overlay')} checked={config.overlay} onChange={this.updateOverlay} />
          </SettingRow>
          <SettingRow label={formatMessage('resizable')}>
            <Switch aria-label={formatMessage('resizable')} checked={config.resizable} onChange={this.updateResizable} />
          </SettingRow>
          <SettingRow label={formatMessage('defaultState')}>
            <Select aria-label={formatMessage('defaultState')} size='sm' value={config.defaultState} onChange={this.updateDefaultState} style={inputStyle}>
              <option value='1'>{formatMessage('expanded')}</option>
              <option value='0'>{formatMessage('collapsed')}</option>
            </Select>
          </SettingRow>
        </SettingSection>
        <SettingSection
          title={
            <div className='d-flex'>
              <div>{formatMessage('toggleBtn')}</div>
              <div className='ml-auto'>
                <Switch aria-label={formatMessage('toggleBtn')} checked={config.toggleBtn.visible} onChange={this.updateToggleBtnVisible} />
              </div>
            </div>
          }
        >
          <Collapse isOpen={config.toggleBtn.visible}>
            <SettingRow label={formatMessage('style')} flow='wrap'>
              <div className='d-flex w-100 justify-content-between'>
                <Button
                  className={classNames('border-0 toggle-btn-style d-flex justify-content-center align-items-center', {
                    selected: toggleBtnTemplate === STYLE_NAMES[0]
                  })}
                  aria-pressed={toggleBtnTemplate === STYLE_NAMES[0]}
                  onClick={this.useDefaultToggleStyle}
                >
                  <div
                    css={css`
                      width: 60px;
                      height: 15px;
                      background: var(--light-800);
                      border-radius: 100px 100px 0 0;
                    `}
                    className='d-flex justify-content-center align-items-center'
                  >
                  </div>
                </Button>
                <Button
                  className={classNames('border-0 toggle-btn-style d-flex justify-content-center align-items-center ml-1', {
                    selected: toggleBtnTemplate === STYLE_NAMES[1]
                  })}
                  aria-pressed={toggleBtnTemplate === STYLE_NAMES[1]}
                  onClick={this.useRectToggleStyle}
                >
                  <div
                    css={css`
                      width: 40px;
                      height: 15px;
                      background: var(--light-800);
                      border-radius: 4px 4px 0 0;
                    `}
                    className='toggle-btn d-flex justify-content-center align-items-center'
                  >
                  </div>
                </Button>
              </div>
            </SettingRow>
            <SettingRow label={formatMessage('icon')} flow='wrap'>
              <div className='d-flex justify-content-between align-items-center'>
                <ThemeColorPicker
                    title={formatMessage('iconBackground')}
                    aria-label={formatMessage('iconBackground')}
                    specificTheme={appTheme}
                    onChange={this.updateToggleBtnIconColor}
                    value={config.toggleBtn.color?.normal?.icon?.color ?? appTheme.colors.black}
                  />
                <Select aria-label={formatMessage('type')} size='sm' css={css`width: 30%`} value={config.toggleBtn.iconSource ?? 0} onChange={this.updateToggleBtnIcon}>
                  <option value='0'><DownOutlined size='s'/></option>
                  <option value='1'><DownDoubleOutlined size='s'/></option>
                  <option value='2'><DownFilled size='s'/></option>
                </Select>
                <NumericInput aria-label={formatMessage('iconSize')} size='sm' css={css`width: 40%`} value={config.toggleBtn.iconSize} onChange={this.updateControllerIconSize} />
              </div>
            </SettingRow>
            <SettingRow label={formatMessage('background')} flow='wrap'>
              <div className='w-100'>
                <div className='d-flex align-items-center justify-content-between mt-1'>
                  <span className='setting-text-level-3'>{formatMessage('default')}</span>
                  <ThemeColorPicker
                    title={formatMessage('background')}
                    aria-label={formatMessage('background')}
                    specificTheme={appTheme}
                    onChange={this.updateToggleBtnBg}
                    value={config.toggleBtn.color?.normal?.bg?.color ?? appTheme.colors.light}
                  />
                </div>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                  <span className='setting-text-level-3'>{formatMessage('hover')}</span>
                  <ThemeColorPicker
                    title={formatMessage('background')}
                    aria-label={formatMessage('background')}
                    specificTheme={appTheme}
                    onChange={this.updateToggleBtnHoverBg}
                    value={config.toggleBtn.color?.hover?.bg?.color ?? appTheme.colors.light}
                  />
                </div>
              </div>
            </SettingRow>
            <SettingRow label={formatMessage('border')} flow='wrap'>
              <BorderSetting value={config.toggleBtn.border} onChange={this.updateToggleBtnBorder}/>
            </SettingRow>
            <SettingRow label={formatMessage('width')}>
              <NumericInput aria-label={formatMessage('width')} size='sm' style={inputStyle} value={config.toggleBtn.width} onChange={this.updateControllerWidth} />
            </SettingRow>
            <SettingRow label={formatMessage('height')}>
              <NumericInput aria-label={formatMessage('height')} size='sm' style={inputStyle} value={config.toggleBtn.height} onChange={this.updateControllerHeight} />
            </SettingRow>
            <SettingRow label={formatMessage('position')}>
              <Select aria-label={formatMessage('position')} size='sm' value={config.toggleBtn.position} onChange={this.updateControllerPos} style={inputStyle}>
                <option value='START'>{isHorizontal ? formatMessage('T') : formatMessage('L')}</option>
                <option value='CENTER'>{formatMessage('center')}</option>
                <option value='END'>{isHorizontal ? formatMessage('B') : formatMessage('R')}</option>
              </Select>
            </SettingRow>
            <SettingRow label={formatMessage('offsetX')}>
              <NumericInput aria-label={formatMessage('offsetX')} size='sm' style={inputStyle} value={config.toggleBtn.offsetX} onChange={this.updateControllerOffsetX} />
            </SettingRow>
            <SettingRow label={formatMessage('offsetY')}>
              <NumericInput aria-label={formatMessage('offsetY')} size='sm' style={inputStyle} value={config.toggleBtn.offsetY} onChange={this.updateControllerOffsetY} />
            </SettingRow>
          </Collapse>
        </SettingSection>
        <SettingSection
          title={
            <div className='d-flex'>
              <div>{formatMessage('divider')}</div>
              <div className='ml-auto'>
                <Switch aria-label={formatMessage('divider')} checked={config.divider.visible} onChange={this.updateDividerVisible} />
              </div>
            </div>
          }
        >
          <Collapse isOpen={config.divider.visible}>
            <SettingRow label={formatMessage('style')} flow='wrap'>
              <BorderSetting value={config.divider.lineStyle} onChange={this.updateDividerStyle} />
            </SettingRow>
          </Collapse>
        </SettingSection>
        <SettingSection title={isHorizontal ? formatMessage('leftPanel') : formatMessage('topPanel')}>
          <SettingRow>
            <BackgroundSetting
              background={config.firstPanelStyle?.background}
              onChange={this.updateFirstPanelBg}
            />
          </SettingRow>
        </SettingSection>
        <SettingSection title={isHorizontal ? formatMessage('rightPanel') : formatMessage('bottomPanel')}>
          <SettingRow>
            <BackgroundSetting
              background={config.secondPanelStyle?.background}
              onChange={this.updateSecondPanelBg}
            />
          </SettingRow>
        </SettingSection>
      </div>
    )
  }
}
