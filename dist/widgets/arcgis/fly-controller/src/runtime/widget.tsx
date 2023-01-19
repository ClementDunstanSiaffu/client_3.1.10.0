/** @jsx jsx */
import { React, jsx, AllWidgetProps, appActions, IMState/* observeStore */ } from 'jimu-core'
import { WidgetPlaceholder, Tooltip } from 'jimu-ui'
import { JimuMapViewComponent, JimuMapView, JimuMapViewGroup } from 'jimu-arcgis'
import { IMConfig } from '../config'
import ErrorTipsManager, { ErrorTypes } from './components/error-tips-manager'
import InteractivePanel from './components/interactive-panel'
import { versionManager } from '../version-manager'
import { getWidgetPlaceholderStyle } from './style'
import widgetIcon from '../../icon.svg'

interface ExtraStateProps {
  autoControlWidgetId: string
  isPrintPreview: boolean
}
interface State {
  errorTip: string
  jimuMapView: JimuMapView
  viewGroup: JimuMapViewGroup
}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig> & ExtraStateProps, State> {
  jimuMapView: JimuMapView
  errorTipsManager: ErrorTipsManager
  static versionManager = versionManager

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetProps<IMConfig>
  ): ExtraStateProps => {
    const { useMapWidgetIds } = props
    const mapWidgetId = useMapWidgetIds && useMapWidgetIds.length !== 0 ? useMapWidgetIds[0] : undefined
    const mapWidgetsInfo = state && state.mapWidgetsInfo
    const isPrintPreview = state?.appRuntimeInfo?.isPrintPreview ?? false
    return {
      autoControlWidgetId: mapWidgetId ? mapWidgetsInfo[mapWidgetId]?.autoControlWidgetId : undefined,
      isPrintPreview: isPrintPreview
    }
  }

  constructor (props) {
    super(props)

    this.errorTipsManager = new ErrorTipsManager({ widget: this })
    this.state = {
      errorTip: this.errorTipsManager.getDefaultError(), // for errorTipsManager
      jimuMapView: null,
      viewGroup: null
    }
    // observeStore(this.onFlyStop.bind(this), ['widgetsState', this.props.id, 'flyStop']);
    // observeStore(this.onRecordAdd.bind(this), ['widgetsState', this.props.id, 'recordAdd']);
  }

  handleActiveViewChange = (jimuMapView: JimuMapView): void => {
    // Async errors
    if (jimuMapView === null || undefined === jimuMapView) {
      this.errorTipsManager.setErrorByType(ErrorTypes.Choose3DMap)
      this.setState({ jimuMapView: null })
      return // skip null
    }

    if (jimuMapView.view.type === '2d') {
      this.errorTipsManager.setErrorByType(ErrorTypes.Choose3DMap)
      this.setState({ jimuMapView: null })
      return // skip 2D
    }
    this.errorTipsManager.setError('') // ok, so clean errortip

    // cache view id
    // if (this.state.jimuMapView?.id !== jimuMapView.id) {
    //   this.panelRef?.handleClearBtnClick() // change init map in liveview, need to remove feature drew
    // }
    this.setState({ jimuMapView: jimuMapView })// 3d scene
  }

  handleViewGroupCreate = (viewGroup: JimuMapViewGroup): void => {
    this.setState({ viewGroup: viewGroup })
  }

  componentDidMount (): void {
    const { layoutId, layoutItemId, id } = this.props
    this.props.dispatch(appActions.widgetStatePropChange(id, 'layoutInfo', { layoutId, layoutItemId }))
  }

  // call exec manuly
  // editStatus = (name, value) => {
  //   const {dispatch, id} = this.props;
  //   dispatch(appActions.widgetStatePropChange(id, name, value));
  // }
  // componentWillUnmount() {
  //   // this.clearUIStateAndEvents();
  //   // this.controllerManager?.destructor();
  //   // this.graphicInteractionManager?.destructor();
  // }
  componentDidUpdate (prevProps: AllWidgetProps<IMConfig>, prevState: State): void {
    if (this.errorTipsManager.isError()) {
      this.errorTipsManager.checkErrorInConfig()
    }
  }

  renderWidgetPlaceholder (): React.ReactElement {
    return <Tooltip showArrow placement={'bottom'}
      title={<div className="p-2" style={{ background: 'var(--light-200)', border: '1px solid var(--light-800)' }}>{this.state.errorTip}</div>}
      arrowStyle={{
        background: 'var(--light-200)',
        border: {
          color: 'var(--light-800)',
          width: '1px'
        }
      }}
    >
      <div className='h-100 w-100'>
        <WidgetPlaceholder icon={widgetIcon} widgetId={this.props.id} css={getWidgetPlaceholderStyle()}/>
      </div>
    </Tooltip>
  }

  render (): React.ReactElement {
    const mapContent = (
      <JimuMapViewComponent
        useMapWidgetId={this.props.useMapWidgetIds?.[0]}
        onActiveViewChange={this.handleActiveViewChange}
        onViewGroupCreate={this.handleViewGroupCreate}
      />
    )
    const { config, intl, theme } = this.props

    let flyControllerContent = null
    if (this.errorTipsManager.isError()) {
      flyControllerContent = this.renderWidgetPlaceholder()
    } else {
      flyControllerContent = (
        <InteractivePanel
          config={config}
          //
          widgetId={this.props.id}
          theme={theme}
          intl={intl}
          jimuMapView={this.state.jimuMapView}
          viewGroup={this.state.viewGroup}
          useMapWidgetIds={this.props.useMapWidgetIds}
          autoControlWidgetId={this.props.autoControlWidgetId}
          isPrintPreview={this.props.isPrintPreview}
        />
      )
    }

    const isH100ForPlaceHolder = this.errorTipsManager.isError() ? ' h-100' : '' // for holder center vertically, but the runtime remains as it is ,#10380
    return (
      <div className={'d-flex align-items-center justify-content-center' + isH100ForPlaceHolder}>
        {flyControllerContent}
        <div className='fly-map'>
          <div>{mapContent}</div>
        </div>
      </div>
    )
  }
}
