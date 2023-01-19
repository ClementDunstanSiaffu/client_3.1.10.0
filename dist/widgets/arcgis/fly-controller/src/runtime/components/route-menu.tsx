/** @jsx jsx */
import { React, jsx, SerializedStyles, IMThemeVariables, css, IntlShape } from 'jimu-core'
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, Select } from 'jimu-ui'
import { RouteItemConfig, PanelLayout, FlyItemMode } from '../../config'
import { ItemData } from '../../common/fly-facade/fly-manager'
import GraphicInteractionManager from '../../common/components/graphic-interaction-manager'
import { RouteConfig } from '../../common/fly-facade/route/routes'
import * as utils from '../../common/utils/utils'
import { getDropdownStyle } from '../style'
import nls from '../translations/default'

import { MenuOutlined } from 'jimu-icons/outlined/editor/menu'
interface Props {
  isEnable: boolean
  layout: PanelLayout
  theme: IMThemeVariables
  intl: IntlShape
  isRouteMode: boolean
  itemsList: ItemData[]

  activedItemUuid: string
  activedRouteUuid: string

  graphicInteractionManagerRef: GraphicInteractionManager

  onActivedRouteChange: ((routeIdx: string) => void)
}
interface States {
  isPopupOpen: boolean
}

export class RouteMenu extends React.PureComponent<Props, States> {
  constructor (props) {
    super(props)

    this.state = {
      isPopupOpen: false
    }
  }

  componentDidUpdate (prevProps: Props, prevState: States): void {
    const graphicInteractionManagerUpdated = (!prevProps.graphicInteractionManagerRef && !!this.props.graphicInteractionManagerRef)
    const itemsListUpdated = (prevProps.itemsList !== this.props.itemsList)
    const updated = (itemsListUpdated || graphicInteractionManagerUpdated)

    if (!updated) {
      return
    }

    //need reAuto select 1st route
    const firstUsedRoute = this._findFirstInUseRoute(this._getRoutesConfig())
    if (firstUsedRoute) {
      this.handleActivedRouteChange(firstUsedRoute.idx) //auto select 1st route to show, if possible
    }
  }

  togglePopup = (): void => {
    this.setState({ isPopupOpen: !this.state.isPopupOpen })
  }

  handleActivedRouteChangeBySelect = (evt): void => {
    const idx = evt.target.value
    this.handleActivedRouteChange(idx)
  }

  handleActivedRouteChange = (routeIdx: string): void => {
    this.props.onActivedRouteChange(routeIdx)
  }

  getStyle = (): SerializedStyles => {
    return css`
      .routes-dropdown {
        width: 170px;

        .jimu-dropdown-button,
        .jimu-dropdown-button:hover{
          height: 100%;
          border: none;
        }
      }
      `
  }

  getRouteItemStyle (): SerializedStyles {
    return css`
      .route-item {
        max-width: 120px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    `
  }

  render (): React.ReactElement {
    const { isRouteMode, isEnable, layout } = this.props
    const plannedRoutesTip = this.props.intl.formatMessage({ id: 'plannedRoutesTip', defaultMessage: nls.plannedRoutesTip })

    const routeItem = this._getItemByActivedItemUuid()
    const routeModeConfig = routeItem?.config as RouteItemConfig
    const routeName = this.getActivedRouteName(routeModeConfig)

    const routes = this._getRoutesConfig()

    return isRouteMode &&
      <div className='h-100 item' css={this.getStyle()}>
        {/* 1.Palette */}
        {(layout === PanelLayout.Palette) &&
          <Dropdown isOpen={this.state.isPopupOpen} disabled={!isEnable} toggle={this.togglePopup} className='btns routes-dropdown dropdowns' activeIcon>
            <DropdownButton icon className='dropdown-btn' type='tertiary' arrow={false} title={routeName ?? plannedRoutesTip}>
              <MenuOutlined />
            </DropdownButton>
            <DropdownMenu showArrow css={getDropdownStyle(this.props.theme)}>
              {
                routes.map((route, idx) => {
                  return route.isInUse &&
                    <div key={idx}>
                      <DropdownItem
                        title={route.displayName}
                        onClick={() => this.handleActivedRouteChange(route.idx)} active={this.props.activedRouteUuid === route.idx}
                      >
                        <div css={this.getRouteItemStyle()}>
                          <div className='mx-2 route-item'>{route.displayName}</div>
                        </div>
                      </DropdownItem>
                    </div>
                })
              }
            </DropdownMenu>
          </Dropdown>}
        {/* 2.Bar */}
        {(layout === PanelLayout.Horizontal) &&
          <React.Fragment>
            <div className='separator-line' />
            <Select onChange={this.handleActivedRouteChangeBySelect} placeholder={routeName ?? plannedRoutesTip} className='routes-dropdown' disabled={!isEnable}>
              {
                routes.map((route, idx) => {
                  return route.isInUse &&
                    <option
                      key={idx} label={route.displayName} title={route.displayName}
                      value={route.idx} selected={this.props.activedRouteUuid === route.idx}
                    >
                      <div css={this.getRouteItemStyle()}>
                        <div className='route-item'>{route.displayName}</div>
                      </div>
                    </option>
                })
              }
            </Select>
          </React.Fragment>}
      </div>
  }

  // items
  _getItemByActivedItemUuid = (): ItemData => {
    let item = null
    if (utils.isDefined(this.props.activedItemUuid) && utils.isDefined(this.props.itemsList)) {
      item = this.props.itemsList.find(itemConfig => (
        itemConfig.config.uuid === this.props.activedItemUuid && FlyItemMode.Route === itemConfig.config.name
      ))
    }
    return item
  }

  _getRoutesConfig () {
    const routeItem = this._getItemByActivedItemUuid()
    const routeModeConfig = routeItem?.config as RouteItemConfig
    const routes = routeModeConfig?.routes
    return routes
  }

  _findFirstInUseRoute (routes: RouteConfig[]) {
    return routes.find((route) => (
      !!route.isInUse
    ))
  }

  getActivedRouteName = (routesConfig: RouteItemConfig): string => {
    const route = utils.getRouteConfigByIdx(routesConfig?.routes, { routeUuid: this.props.activedRouteUuid })
    return route?.displayName
  }
}
