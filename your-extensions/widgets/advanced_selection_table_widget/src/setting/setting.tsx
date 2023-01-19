
import { React, jsx } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {
  mapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  render (): React.ReactNode {
    return (
            <div className="widget-setting">
                <MapWidgetSelector
                    useMapWidgetIds={this.props.useMapWidgetIds}
                    onSelect = {this.mapSelected}
                />
            </div>
    )
  }
}
