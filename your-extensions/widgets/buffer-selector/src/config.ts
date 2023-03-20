import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  checkUrlExternal:boolean,
  urlConfig:string,

  idWidgetTable: string,
  servizi_da_mappa: boolean,
  maxWidthBuffer : number,
  slideBuffer : boolean,
  queryConGeometry : boolean,
  listvalues: ListValue[]
}
export interface ListValue {
  name: string,
  listIds: [],
  link: string
}


export type IMConfig = ImmutableObject<Config>
