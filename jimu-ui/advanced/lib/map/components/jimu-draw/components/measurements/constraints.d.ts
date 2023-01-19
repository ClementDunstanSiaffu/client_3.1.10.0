import { JimuSymbolType } from '../../../symbol-selector';
export interface MeasurementsPropsInfo {
    enableMeasurements: boolean;
    fontsColor?: number[] | string;
    fontsSize?: number;
    haloColor?: number[] | string;
    haloSize?: number;
}
export declare enum ArealUnits {
    Acres = "acres",
    Ares = "ares",
    Hectares = "hectares",
    SquareFeet = "square-feet",
    SquareMeters = "square-meters",
    SquareYards = "square-yards",
    SquareKilometers = "square-kilometers",
    SquareMiles = "square-miles"
}
export declare enum LinearUnits {
    Meters = "meters",
    Feet = "feet",
    Kilometers = "kilometers",
    Miles = "miles",
    NauticalMiles = "nautical-miles",
    Yards = "yards"
}
export declare enum CoordUnits {
    DD = "dd",
    DMS = "dms"
}
export interface MeasurementsRuntimeInfo {
    enableMeasurements: boolean;
    isMeasuring: boolean;
    isShowLocationM: boolean;
    isShowLengthM: boolean;
    isShowAreaM: boolean;
    isShowPerimeterM: boolean;
    fontsColor: number[] | string;
    fontsSize: number;
    haloColor?: number[] | string;
    haloSize?: number;
    coordUnit: CoordUnits;
    linearUnit: LinearUnits;
    arealUnit: ArealUnits;
    perimeterUnit: LinearUnits;
}
export declare enum MModes {
    Position = "pos",
    GeodesicLength = "geodesicLength",
    PlanarLength = "planarLength",
    GeodesicArea = "geodesicArea",
    PlanarArea = "planarArea"
}
export interface MeasurementsUnitsInfo {
    actived: boolean;
    type: JimuSymbolType;
    value: string;
    note: string;
    label: string;
}
