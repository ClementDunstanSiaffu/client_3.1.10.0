/** @jsx jsx */
import { React, jsx, ImmutableArray } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import { CreateToolType } from '../config'

export interface Props {
  mapWidgetIds: ImmutableArray<string>
  createToolTypes: ImmutableArray<CreateToolType>
  onGeometryChange: (geom: __esri.Geometry, layer?: __esri.GraphicsLayer, graphic?: __esri.Graphic, clearAfterApply?: boolean) => void
}

export function GeometryFromMap (props: Props) {
  const { onGeometryChange, mapWidgetIds } = props
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)
  const PolygonRef = React.useRef<typeof __esri.Polygon>(null)

  React.useEffect(() => {
    if (jimuMapView?.view) {
      const handler = jimuMapView.view.watch('extent', (extent: __esri.Extent) => {
        if (PolygonRef.current) {
          onGeometryChange(PolygonRef.current.fromExtent(extent))
        } else {
          loadArcGISJSAPIModules(['esri/geometry/Polygon']).then(modules => {
            PolygonRef.current = modules[0]
            onGeometryChange(PolygonRef.current.fromExtent(extent))
          })
        }
      })
      // set initial extent
      onGeometryChange(jimuMapView.view.extent)
      return () => {
        handler.remove()
      }
    }
  }, [jimuMapView, onGeometryChange])

  const handleJimuMapViewChanged = React.useCallback((jimuMapView: JimuMapView) => {
    setJimuMapView(jimuMapView?.view != null ? jimuMapView : null)
  }, [])

  return (
    <React.Fragment>
      {
        mapWidgetIds?.map((mapWidgetId, x) => (
          <JimuMapViewComponent
            key={x} useMapWidgetId={mapWidgetId} onActiveViewChange={handleJimuMapViewChanged}
          />
        ))
      }
    </React.Fragment>
  )
}
