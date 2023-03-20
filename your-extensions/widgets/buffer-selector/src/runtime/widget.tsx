/** @jsx jsx */
import {React, AllWidgetProps, jsx, DataSource, appActions, WidgetState, getAppStore} from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import '../style.css';
import {Label, Checkbox, Slider, NumericInput, Button, MultiSelect, Select, Option, Alert} from 'jimu-ui'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import Sketch from "esri/widgets/Sketch";
import geometryEngine from "esri/geometry/geometryEngine";
import { IMConfig ,ListValue } from '../config'

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any> {
    layerSketch = new GraphicsLayer({id:"buffer-selector-sketch",listMode:"hide",visible:true});

    symbolFound = {
        type: "simple-fill",
        color: [51, 51, 204, 0.5],
        style: "solid",
        outline: {
            style: "short-dash",
            color: "white",
            width: 3
        }
    };
    arrayView:ListValue[];
    config;
    constructor(props) {
        super(props);
        this.state = {
            jimuMapView: null,
            labelVisible:true,
            currentWidget: null,
            valueBuffer: 0,
            arrayLayer: [],
            viewSelectDraw: true,
            listServices: [],
            form:{
                geometry:null,
                typeSelected:"intersects",
                listServices: []
            }
        };

        if(this.props.config.checkUrlExternal){
            // @ts-ignore
            fetch(this.props.config.urlConfig)
                .then((response) => response.json())
                .then((data) => {
                    this.config = data;
                    this.arrayView = Object.assign([], data.listvalues)
                    this.setArrayData();
                });
        }else{
            this.config = this.props.config;
            this.arrayView = Object.assign([], this.props.config.listvalues)
            this.setArrayData();
        }

        this._viewLabels = this._viewLabels.bind(this);
        this._viewSelectDraw = this._viewSelectDraw.bind(this);

        this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
        this.onChangeSlider = this.onChangeSlider.bind(this);
        this.onChangeSelectTypeGeometry = this.onChangeSelectTypeGeometry.bind(this);
        this.onChangeSelectLayer= this.onChangeSelectLayer.bind(this);
        this.onClickResearch = this.onClickResearch.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    setArrayData(){
        if(this.arrayView && this.arrayView.length){
            let arraySup = [];

            this.arrayView.forEach((el, index) => {
                arraySup.push({
                    label:el.name,
                    value:el.name
                })
            });

            this.setState({
                arrayLayer: arraySup
            });
        }
    }

    async activeViewChangeHandler(jmv: JimuMapView){

        if (this.state.jimuMapView) {
            if (this.state.currentWidget) {
                this.state.currentWidget.destroy();
                this.state.jimuMapView.view.map.remove(this.layerSketch);
            }
        }

        if (jmv) {
            this.setState({
                jimuMapView: jmv
            });

            const sketch = new Sketch({
                layer: this.layerSketch,
                view: jmv.view,
                creationMode:"single",
                container: "sketch-buffer-selector",//TODO migliorare senza id cablato
                availableCreateTools:["polygon", "rectangle", "circle"],
                visibleElements: {
                    selectionTools:{
                        "lasso-selection": false
                    },
                    settingsMenu: false
                }
            });
            jmv.view.map.add(this.layerSketch);

            this.setState({
                currentWidget: sketch
            });
        }
    };

    componentDidUpdate() {
        let widgetState: WidgetState = getAppStore().getState().widgetsRuntimeInfo[this.props.id].state;
        if(widgetState === WidgetState.Closed){
            //if(this.state.currentWidget) this.state.currentWidget.cancel();
            this.layerSketch.visible = false;
        }else if(widgetState === WidgetState.Opened){
            //if(this.state.currentWidget) this.state.currentWidget.create();
            this.layerSketch.visible = true;
        }
    }

    _viewLabels(){
        this.setState({
            labelVisible: !this.state.labelVisible
        });
    }

    _viewSelectDraw(){
        this.setState({
            viewSelectDraw: !this.state.viewSelectDraw
        });
        this.layerSketch.visible = this.state.viewSelectDraw;
    }

    onChangeSlider(e){
        this.setState({
            valueBuffer: parseInt(isNaN(e) ? e.target.value: e)
        });
    }

    onChangeSelectLayer(e,value,s){
        const n = this.arrayView.find(f=>f.name === value);

        //@ts-ignore
        const arrayId = n.listIds.split(",");

        for(let i=0;i<arrayId.length;i++){
            const id = arrayId[i];
            const url = n.link.slice(-1) !== "/" ? n.link + "/" + id : n.link + id;
            if(e.target.checked){
                this.state.listServices.push(url);
            }else{
                let index = this.state.listServices.indexOf(url);
                if (index > -1) {
                    this.state.listServices.splice(index,1);
                }
            }
        }

        this.setState(this.state);
    }

    onChangeSelectTypeGeometry(e){
        this.state.form.typeSelected = e.target.value;
        this.setState(this.state);
    }

    async onClickResearch(){
        const {view} = this.state.jimuMapView;

        view.map.tables.removeAll();

        //parametri form
        let arrayGeometry = [];
        this.layerSketch.graphics.forEach(g=>{
            // @ts-ignore
            g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBuffer, "meters");
            arrayGeometry.push(g.geometry);
        });

        //controllo errori
        let arrayErrors = [];
        if(arrayGeometry.length) this.state.form.geometry = geometryEngine.union(arrayGeometry);
        else arrayErrors.push("Seleziona una geometria in mappa");
        if(!this.state.listServices.length) arrayErrors.push("Seleziona almeno un servizio");
        if(!this.state.form.typeSelected) arrayErrors.push("Seleziona una tipologia di selezione");

        this.setState({
            errorMessage:arrayErrors.join()
        });

        if(arrayErrors.length === 0 && this.config.idWidgetTable !== ""){

            this.state.jimuMapView.view.map.allLayers.forEach((f, index) =>{
                if(f && f.type==="feature" && this.state.listServices.indexOf(index) !== -1){
                    if(f.labelingInfo?.length){
                        f.labelingInfo[0].symbol.font.family = "Arial";//fix font verdana not in static esri
                        f.labelsVisible = this.state.labelVisible;
                    }
                }
            });

            //mando layerid ad TableList
            this.props.dispatch(
                appActions.widgetStatePropChange(
                    this.config.idWidgetTable,
                    "layerOpen",
                    {
                        listServiceUrl:true,
                        typeSelected:this.state.form.typeSelected,
                        geometry:this.state.form.geometry.toJSON(),
                        listServices:this.state.listServices
                    }
                )
            );
        }
    }

    render () {

        return (
            <div className="widget-buffer-selector jimu-widget container-fluid">

                {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
                    <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
                )}
                <div className="row mt-3 mb-1">
                    <div className="col-md-12">
                        <Label centric check>
                            <Checkbox className="mr-2" aria-label="Visualizza disegno selezione" checked={this.layerSketch.visible} onChange={this._viewSelectDraw}/>
                            Visualizza disegno selezione
                        </Label>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-12">
                        <Label centric check>
                            <Checkbox className="mr-2" aria-label="Visualizza disegno selezione" checked={this.state.labelVisible} onChange={this._viewLabels}/>
                            Visualizza etichette
                        </Label>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-12">
                        <label className="w-100">
                            Seleziona modalità disegno
                            <div id="sketch-buffer-selector" className="mt-2"></div>
                        </label>
                    </div>

                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label className="w-100">
                            Valore di buffer <NumericInput defaultValue={this.state.valueBuffer} value={this.state.valueBuffer} onChange={this.onChangeSlider} className="d-inline-block w-50"/> m
                            <Slider
                                className="w-100 mt-1"
                                aria-label="Range"
                                value={this.state.valueBuffer}
                                defaultValue={this.state.valueBuffer}
                                max={5000}
                                min={0}
                                onChange={this.onChangeSlider}
                                step={1}
                            />
                        </label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label className="w-100">
                            Tipo di selezione
                            <Select className="w-100 mt-2" onChange={this.onChangeSelectTypeGeometry} placeholder="Selezione tipo..." value="intersects">
                                <Option value="intersects" selected="selected">Intersects</Option>
                                <Option value="contains">Contains</Option>
                                <Option value="crosses">Crosses</Option>
                                <Option value="envelope-intersects">Envelope Intersects</Option>
                                <Option value="index-intersects">Index Intersects</Option>
                                <Option value="Overlaps">Overlaps</Option>
                                <Option value="touches">Touches</Option>
                                <Option value="within">Within</Option>
                                <Option value="relation">Relation</Option>
                            </Select>
                        </label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <MultiSelect
                            className="w-100"
                            items={this.state.arrayLayer}
                            onClickItem={this.onChangeSelectLayer}
                            placeholder="Lista servizi"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <Button className="w-100" onClick={this.onClickResearch}>Avvia ricerca</Button>
                        {this.state.errorMessage && this.state.errorMessage !== "" ? (
                            <Alert
                                form="basic"
                                open
                                text={this.state.errorMessage}
                                type="warning"
                                className="mt-2 w-100"
                                withIcon
                            />
                        ) : ("")}
                    </div>
                </div>
            </div>
        )
    }
}
