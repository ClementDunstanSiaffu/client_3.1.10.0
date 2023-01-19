/** @jsx jsx */
import { Immutable, ReactRedux, IMState, AppMode } from 'jimu-core'
import { interact } from 'jimu-core/dnd'
import { getAppConfigAction } from 'jimu-for-builder'
import { utils } from 'jimu-layouts/layout-runtime'
import { SidebarLayoutItem } from './layout-item'
import { SidebarType, CollapseSides } from '../../config'
import { BaseSidebarLayout, SidebarProps } from '../layout-base'

class _SidebarLayoutBuilder extends BaseSidebarLayout {
  constructor (props) {
    super(props)

    this.layoutItemComponent = SidebarLayoutItem
  }

  componentDidUpdate (): void {
    const { appMode, config } = this.props
    if (appMode === AppMode.Run && !config.resizable) {
      this.splitRef.classList.add('no-resize')
      this.removeSplitHandler()
      return
    }
    this.splitRef.classList.remove('no-resize')
    super.componentDidUpdate()
  }

  bindSplitHandler = (): void => {
    let dx: number
    let dy: number
    if (this.splitRef != null && this.interactable == null) {
      this.interactable = interact(this.splitRef)
        .origin('parent')
        .draggable({
          inertia: false,
          autoScroll: false,
          modifiers: [
            interact.modifiers.restrict({
              restriction: 'parent'
            })
          ],
          startAxis: this.props.direction === SidebarType.Horizontal ? 'x' : 'y',
          lockAxis: this.props.direction === SidebarType.Horizontal ? 'x' : 'y',
          onstart: (event: Interact.DragEvent) => {
            event.stopPropagation()

            dx = 0
            dy = 0
            const parentRect = this.ref.getBoundingClientRect()
            this.domSize = this.props.direction === SidebarType.Horizontal ? parentRect.width : parentRect.height
            this.setState({
              isResizing: true
            })
          },
          onmove: (event: Interact.DragEvent) => {
            event.stopPropagation()

            dx += event.dx
            dy += event.dy

            if (this.props.direction === SidebarType.Horizontal) {
              const sign = utils.isRTL() ? -1 : 1
              if (this.props.config.collapseSide === CollapseSides.First) {
                this.setState({
                  deltaSize: Math.round(dx * sign)
                })
              } else {
                this.setState({
                  deltaSize: -Math.round(dx * sign)
                })
              }
            } else {
              if (this.props.config.collapseSide === CollapseSides.First) {
                this.setState({
                  deltaSize: Math.round(dy)
                })
              } else {
                this.setState({
                  deltaSize: -Math.round(dy)
                })
              }
            }
          },
          onend: (event: Interact.DragEvent) => {
            event.stopPropagation()
            const { config } = this.props
            const delta = this.state.deltaSize
            let size
            if (utils.isPercentage(config.size)) {
              size = `${((((parseFloat(config.size) * this.domSize) / 100 + delta) * 100) / this.domSize).toFixed(4)}%`
            } else {
              size = `${(parseFloat(config.size) + delta).toFixed(0)}px`
            }
            const appConfigAction = getAppConfigAction()
            appConfigAction.editWidgetConfig(this.props.widgetId, Immutable(config).set('size', size)).exec()

            this.setState({
              deltaSize: 0,
              isResizing: false
            })
          }
        })
    }
  }
}

function mapStateToLayoutProps (state: IMState, ownProps: SidebarProps): { appMode: AppMode } {
  return {
    appMode: state.appRuntimeInfo.appMode
  }
}

export const SidebarLayoutBuilder = ReactRedux.connect<{ appMode: AppMode }, unknown, SidebarProps>(mapStateToLayoutProps)(_SidebarLayoutBuilder)
