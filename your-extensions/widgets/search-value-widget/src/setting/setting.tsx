
import {React,jsx,FormattedMessage} from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { MapWidgetSelector, SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components';

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>,any>{

    onSelectMap = (useMapWidgetIds:string[])=>{
        this.props.onSettingChange({
            id:this.props.id,
            useMapWidgetIds:useMapWidgetIds
        })
    }

    saveState = (val:string,key:string)=>{
        const currentService = this.props.config.service;
        const newService = {...currentService,[key]:val};
        this.props.onSettingChange({
            id:this.props.id,
            config:{...this.props.config,"service":newService}
        })
    }

    render(): React.ReactNode {
        return(
            <div className='widget-setting-search-value'>
                <SettingSection title={"Select map"}>
                    <MapWidgetSelector useMapWidgetIds={this.props.useMapWidgetIds} onSelect = {this.onSelectMap}/>
                </SettingSection>
                <SettingSection title={"Put your service"}>
                    <SettingRow label={"Service url"}>
                        <input 
                            defaultValue={this.props.config?.service.url} 
                            onChange = {(e)=>this.saveState(e.target.value,"url")}
                        />   
                    </SettingRow>
                    <SettingRow label={"Layer id"}>
                        <input 
                            defaultValue={this.props.config?.service.layerId} 
                            onChange = {(e)=>this.saveState(e.target.value,"layerId")}
                        />
                    </SettingRow>
                    <SettingRow label={"Search field"}>
                        <input 
                            defaultValue={this.props.config?.service.searchField} 
                            onChange = {(e)=>this.saveState(e.target.value,"searchField")}
                        />
                    </SettingRow>
                </SettingSection>
            </div>
     
        )
    }

} 