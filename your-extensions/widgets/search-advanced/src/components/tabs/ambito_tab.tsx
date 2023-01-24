
import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';
import Table from '../common/table';
import Query from 'esri/rest/support/Query';
import query from 'esri/rest/query';
import Graphic from 'esri/Graphic';
import Polygon from 'esri/geometry/Polygon';

export default class AmbitoTab extends React.PureComponent<any,any>{

  static contextType?: React.Context<any> = SearchWidgetContext;

  constructor(props:any){
    super(props);
    this.onChangeSelectAmbiti = this.onChangeSelectAmbiti.bind(this);
  }

  nls = (id:string)=>{
    const searchWidget = this.context?.parent;
    return searchWidget.nls(id);
  }

  async onChangeSelectAmbiti (e) {

    const searchWidget = this.context?.parent;
    const jimuMapView = this.context?.jimuMapView;
    const searchItems = this.context?.searchItems

    searchWidget.graphicLayerFound.removeAll();
    searchWidget.setLocatingPostion(true,false);

    const queryObject = new Query();
    queryObject.where = `IDAMBITO = "${e.target.value}"`;
    queryObject.returnGeometry = true;
    // @ts-expect-error
    queryObject.outFields = '*';

    try{
      const results = await query.executeQueryJSON(searchItems.url, queryObject);
      results.features.sort(function (a, b) {
        return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1))
      })
      const totalpolygonGraphic = [];
      results.features.forEach((el, i) => {
        const geometryComune = el.geometry;
        const polygon = new Polygon(geometryComune);
        const polygonGraphic = new Graphic({geometry: polygon,symbol: searchWidget.symbolFound})
        searchWidget.graphicLayerFound.add(polygonGraphic);
        totalpolygonGraphic.push(polygonGraphic);
      })

      jimuMapView.view.goTo({center: [totalpolygonGraphic]})

      searchWidget.setState({resultsAmbiti: results.features})
      searchWidget.setLocatingPostion(false,false);
      }catch(err){
        console.log(err,"src/components/ambito_tab line 60")
        searchWidget.setLocatingPostion(false,true);
      }
    }

    render(): React.ReactNode {

      const listAmbiti = this.context?.listAmbiti??[];
      const urlFetched = this.context?.urlFetched;
      const searchWidget = this.context?.parent;
      const locatingPosition = this.context?.locatingPosition;
      const resultsAmbiti = this.context?.resultsAmbiti

      return(
        <div className="mt-4 container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-2">
                {
                  (!listAmbiti.length  && urlFetched["ambito"]) && 
                  <Alert className="w-100" form="basic" open text={this.nls("failedAmbito")} type="error" withIcon/>
                }
                {
                  listAmbiti.length > 0  && 
                  <Alert className="w-100" form="basic" open text={this.nls("scopeAlert")} type="info" withIcon/>
                }
                {
                  (!listAmbiti.length && !urlFetched["ambito"]) && 
                    <div style={{height:'80px',position:'relative',width:'100%',marginLeft:"auto",marginRight:"auto"}}>
                      <Loading />
                    </div>
                }
              </div>
              <div className="mb-2">
                {listAmbiti.length > 0 && 
                  <Select onChange={this.onChangeSelectAmbiti} placeholder="Seleziona un comune">
                    {listAmbiti.map((el, i) => {
                      return <Option value={el.attributes.IDAMBITO}>
                        {el.attributes.NOMEAMBITO}
                        </Option>
                    })}
                  </Select>}
                  <LocatingPositionLoader locatingPosition={locatingPosition}/>
                  {
                    !locatingPosition["status"] && locatingPosition["error"] && 
                      <Alert 
                        open = {!locatingPosition["status"] && locatingPosition["error"]  ?true:false}
                        text = {this.nls("failedToLocatePosition")}
                        type = "error"
                        onClose={()=>searchWidget.setLocatingPostion(false,false)}
                      />
                  }
                </div>
                <div style={{maxHeight: 350, overflowY: 'auto'}}>
                  { !resultsAmbiti?.length
                      ? ""
                      : <Table 
                            className="w-100" 
                            list={resultsAmbiti} 
                            handleClick={(e)=>searchWidget.onClickViewTable(e,"searchAmbiti")} 
                            locatingPosition = {locatingPosition}
                        />
                  }
                </div>
              </div>
            </div>
          </div>
        )
    }
}