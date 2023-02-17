
import { ImmutableObject } from "seamless-immutable";

export interface config {
    service:{url:string}
}

export type IMConfig = ImmutableObject<config>