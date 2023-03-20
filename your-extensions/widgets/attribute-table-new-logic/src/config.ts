import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  tabEmptyNotShow: boolean,
  buttonFilter: boolean,
  downloadCGI: boolean,
  downloadECGI: boolean,
  downloadKMZ: boolean
}

export type IMConfig = ImmutableObject<Config>
