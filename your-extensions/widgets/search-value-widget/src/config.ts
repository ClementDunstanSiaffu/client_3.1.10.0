
import { ImmutableObject } from "seamless-immutable";

export interface config {
    service:{
        url:string,
        layerId:number,
        searchField:string
    }
}

export type IMConfig = ImmutableObject<config>