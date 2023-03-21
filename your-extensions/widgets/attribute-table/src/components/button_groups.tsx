
import {React,jsx} from 'jimu-core';
import {Dropdown, DropdownButton, DropdownMenu, DropdownItem, Button, ButtonGroup} from "jimu-ui";
import {WidgetFilterOutlined} from "jimu-icons/outlined/brand/widget-filter";
import {CloseOutlined} from 'jimu-icons/outlined/editor/close'
import {ColorsOutlined} from 'jimu-icons/outlined/application/colors'
import {ExportOutlined} from 'jimu-icons/outlined/editor/export'
import { ClearSelectionOutlined } from 'jimu-icons/outlined/gis/clear-selection'
import { ClearOutlined } from 'jimu-icons/outlined/editor/clear'
import { BrushOutlined } from 'jimu-icons/outlined/editor/brush'
import { ColorPicker } from 'jimu-ui/basic/color-picker';
import esriRequest from "esri/request";
import { Download } from '../helper/download';
import Widget from '../runtime/widget';
import SelectFilterType from './select_filter';

type PropsType = {
    parent:Widget,
    selectedColor:string,
    filterValue:number,
    showColorButtonGroup:boolean
}

export default class ButtonGroupComponent extends React.PureComponent<PropsType,any>{

    constructor (props) {
        super(props)
        // this.state = {
        //     geometryFilter: null,
        //     listServices:[]
        // }
        this.optionClickDownload = this.optionClickDownload.bind(this);
        this.optionColorRandom = this.optionColorRandom.bind(this);
    }

    nls = (id: string) => {
        const self = this.props.parent;
        return self.nls(id);
    }

    async getKmzFile(layer,found){
        const objIds = found.map(f=>f.OBJECTID);
        const formData = new FormData();
        formData.append("f", "kmz");
        formData.append("where", `OBJECTID IN (${objIds.join(',')})`);
        formData.append("outFields", "*");
        const response = await esriRequest(layer.url.replace("FeatureServer","MapServer") + "/" + layer.layerId + "/query", {
            responseType: "blob",
            body:formData
        });
        const url = window.URL.createObjectURL(response.data);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = 'result.kmz';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }

    getStoreSingleAttributes(table,attribute){
        let arrayNew = [];
        const tableItems = table?.highlightIds.items??[];
        const checkerKey = ["OBJECTID","objectid","Objectid","FID","Fid","fid"];
        if(table && table.grid && table.grid.store && table.grid.store.itemCache && table.grid.store.itemCache.items?.length){
            let currentKey = "OBJECTID";
            const gridItems = table.grid.store.itemCache.items;
            const keys = Object.keys(gridItems[0]?.feature.attributes)??[];
            if (!keys.includes("OBJECTID")){
                if (keys.length){
                    for (let i = 0;i < keys.length;i++){
                        if (checkerKey.includes(keys[i])){
                            currentKey = keys[i];
                            break;
                        }
                    }
                }
            }
            for(let i=0;i<gridItems.length;i++){
                let attr = gridItems[i].feature.attributes;
                if (tableItems.includes(attr[currentKey])){
                    let newAttr = {};
                    newAttr[attribute] = attr[attribute]
                    arrayNew.push(newAttr);
                }
            }
        }
        return arrayNew;
    }

    
    getStoreClean(table){
        let arrayNew = [];
        const tableItems = table?.highlightIds.items??[];
        const checkerKey = ["OBJECTID","objectid","Objectid","FID","Fid","fid"];
        if(table && table.grid && table.grid.store && table.grid.store.itemCache && table.grid.store.itemCache.items?.length){
            let currentKey = "OBJECTID";
            const gridItems = table.grid.store.itemCache.items;
            const keys = Object.keys(gridItems[0]?.feature.attributes)??[];
            if (!keys.includes("OBJECTID")){
                if (keys.length){
                    for (let i = 0;i < keys.length;i++){
                        if (checkerKey.includes(keys[i])){
                            currentKey = keys[i];
                            break;
                        }
                    }
                }
            }
            for(let i=0;i<gridItems.length;i++){
                let attr = gridItems[i].feature.attributes;
                if (tableItems.includes(attr[currentKey]))arrayNew.push(attr);
            }
        }
        return arrayNew;
    }


    optionClickDownload(selected){
        const self = this.props?.parent;
        const activeTable = self.getActiveTable();
        const arrayTable = self.arrayTable;
        const tabs = self.state.tabs;
        switch (selected){
            case "KMZ":
                if(activeTable){
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable,"OBJECTID");
                    if (cleanArrayStore.length){
                        this.getKmzFile(activeTable.layer,cleanArrayStore)
                    }else{
                        this.props.parent.setState({openNoItemModal:true})
                    }
                }
                break;
            case "eCGI_CSV":
                if(activeTable){
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable,"eCGI_28bit");
                    if(cleanArrayStore.length){
                        Download.CSV(cleanArrayStore);
                    }else{
                        this.props.parent.setState({openNoItemModal:true})
                    }
                }
                break;
            case "CGI_CSV":
                if(activeTable){
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable,"CGI");
                    if(cleanArrayStore.length){
                        Download.CSV(cleanArrayStore);
                    }else{
                        this.props.parent.setState({openNoItemModal:true})
                    }
                }
                break;
            case "EXCEL_TABLE":break;
            case "CSV_TABLE":
                if(activeTable){
                    const cleanArrayStore = this.getStoreClean(activeTable);
                    if(cleanArrayStore.length){
                        Download.CSV(cleanArrayStore);
                    }else{
                        this.props.parent.setState({openNoItemModal:true})
                    }
                }
                break;
            case "ALL_TABLE":
                for(let i=0;i<tabs.length;i++){
                    const item = arrayTable[i];
                    const cleanArrayStore = this.getStoreClean(item);
                    if(cleanArrayStore.length){
                        Download.CSV(cleanArrayStore,item.layer.title+".csv");
                    }else{
                        this.props.parent.setState({openNoItemModal:true})
                    }
                }
            break;
        }

    }

    optionColorRandom(){
        const self = this.props?.parent;
        self.optionColorFound(null);
    }

    optionFilterRemove(){
        const self = this.props.parent;
        self.createListTable();

        //pulisco eventuali graphicLayerSketch
        self.state.jimuMapView.view.map.layers.items.filter(f=>f.id.indexOf("sketch") !== -1).forEach(f=>f.removeAll());
    }

    setButtonFilter(){
        let buttonFilter;
        const self = this.props?.parent;
        const filterValue = this.props.filterValue;
        if(self.state.geometryFilter){
            buttonFilter = <div>
                <Button onClick={this.optionFilterRemove} size="default">
                    <WidgetFilterOutlined/>{this.nls("clearFilter")}
                </Button>
            </div>;
        }else{
            buttonFilter = <div>
                {this.props.filterValue === 1 && <Button onClick={self?.optionFilterExtentions} size="default">
                    <WidgetFilterOutlined/>{this.nls("filterByExtention")}
                </Button>}
                {self?.props.config.buttonFilter && (<Button onClick={self?.optionOpenFilter} size="default">
                    <WidgetFilterOutlined/>{this.nls("filter")}
                </Button>)}
                <Button onClick={self?.optionCloseAllTabs} size="default">
                    <CloseOutlined/>{this.nls("closeAllTab")}
                </Button>
                <SelectFilterType parent={self} filterValue = {filterValue}/>
            </div>;
        }
        return buttonFilter;
    }

    render(): React.ReactNode {

        let buttonFilter = this.setButtonFilter();
        const self = this.props?.parent;
        const showColorButtonGroup = this.props.showColorButtonGroup

        return(
            <div className="container-fluid bg-primary h-auto">
            <div className="row">
                <div className="col-md-12">
                    <ButtonGroup className="w-100">
                        <Dropdown direction="down">
                            <DropdownButton>
                                <ExportOutlined className="mr-2"/>{this.nls("download")}
                            </DropdownButton>
                            <DropdownMenu>
                                {self?.props.config.downloadKMZ && (<DropdownItem onClick={()=>{this.optionClickDownload("KMZ")}}>
                                    <ExportOutlined className="mr-2"/>{this.nls("exportKMZ")}
                                </DropdownItem>)}

                                {self?.props.config.downloadECGI && (<DropdownItem onClick={()=>{this.optionClickDownload("eCGI_CSV")}}>
                                    <ExportOutlined className="mr-2"/>{this.nls("exportEcgiToCsv")}
                                </DropdownItem>)}
                                {self?.props.config.downloadCGI && (<DropdownItem onClick={()=>{this.optionClickDownload("CGI_CSV")}}>
                                    <ExportOutlined className="mr-2"/>{this.nls("exportCgiToCsv")}
                                </DropdownItem>)}
                                <DropdownItem onClick={()=>{this.optionClickDownload("CSV_TABLE")}}>
                                    <ExportOutlined className="mr-2"/>{this.nls("exportCsvSelectedTable")}
                                </DropdownItem>
                                <DropdownItem onClick={()=>{this.optionClickDownload("ALL_TABLE")}}>
                                    <ExportOutlined className="mr-2"/>{this.nls("exportAllTable")}
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        {showColorButtonGroup && <Dropdown direction="down">
                            <DropdownButton>
                                <ColorsOutlined className="mr-2"/>{this.nls("highlightColor")}
                            </DropdownButton>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>{this.optionColorRandom()}}>
                                    <ClearSelectionOutlined className="mr-2"/>{this.nls("randomColor")}
                                </DropdownItem>
                                <button className="jimu-dropdown-item app-root-emotion-cache-ltr-1vl5tzn dropdown-item">
                                    <BrushOutlined className="mr-2"/> <ColorPicker id="colorPickerAttributeTable" className="color-picker-block mr-2" onChange={(e)=>{self?.optionColorFound(e)}} placement="top" color = {this.props.selectedColor}/>{this.nls("chooseColor")}
                                </button>
                                <DropdownItem onClick={()=>{self?.optionColorCleanSelected()}}>
                                    <ClearOutlined className="mr-2"/>{this.nls("clearHightlight")}
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>}

                        {buttonFilter}

                    </ButtonGroup>
                </div>
            </div>
        </div>   
        )
    }
}