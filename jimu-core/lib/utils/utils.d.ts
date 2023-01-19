import { isEqual as isDeepEqual, get as getValue } from 'lodash-es';
import { Size, BrowserSizeMode } from '../types/common';
import { IMAppConfig, IMFieldSchema } from '../types/app-config';
import { ImmutableArray } from 'seamless-immutable';
import { IntlShape } from 'react-intl';
import { AppInfo } from '../types/app-info';
import * as jimuThemeModule from 'jimu-theme';
import { IGeometry, GeometryType } from '@esri/arcgis-rest-types';
export { getValue, isDeepEqual };
declare type WidgetPanelCallBack = 'onOpen' | 'onClose' | 'onActive' | 'onDeActive';
export declare enum AppHigherVersionStateType {
    None = "None Version Heigher",
    Draft = "Draft Version Heigher",
    Published = "Published Version Heigher",
    Both = "Both Version Heigher"
}
export declare function getGeometryType(geom: IGeometry): GeometryType;
export declare function getGeometryService(): string;
export declare function getWidgetCallbackNamesFromWidgetState(widgetState: any, prevWidgetState: any): WidgetPanelCallBack[] | WidgetPanelCallBack;
export declare function getPanelCallbackNamesFromPanelState(panelState: any, prevPanelState: any): WidgetPanelCallBack[] | WidgetPanelCallBack;
export declare function isTouchDevice(): boolean;
export declare function getBrowserSizeMode(size: Size): BrowserSizeMode;
export declare function findViewportSize(appConfig: IMAppConfig, browserSizeMode: BrowserSizeMode): Size;
export declare function getSizeModeWidth(sizeMode: BrowserSizeMode): number;
export declare function loadstyle(url: string, beforeId?: string): Promise<unknown>;
export declare function applyMixins(derivedCtor: any, baseCtors: any[]): void;
/**
 * check whether the two array contain the same items, don't consider the order
 * @param arr1
 * @param arr2
 */
export declare function isArrayContainSameItems(arr1: string[], arr2: string[]): boolean;
export declare function isArrayContainSameItems(arr1: number[], arr2: number[]): boolean;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
export declare function hyphenateStyleName(name: any): any;
export declare function styleObjectToString(styles: any): string;
export declare function tryGet<T>(getFn: () => T, waitTime?: number, tryInterval?: number): Promise<T>;
/**
 * Please use this as the first part of the local storage key if you need to save something in local storage.
 */
export declare function getLocalStorageAppKey(): string;
export declare const getUID: () => string;
export declare const getUUID: () => string;
export declare const calculateDigits: (n: number) => number;
export declare const getOverlayUniqueId: (type: 'popper' | 'modal', overlays?: ImmutableArray<string>) => string;
/**
 * the i18n string use this format: ${key}
 * @param obj
 * @param intl
 * @param defaultMessages
 */
export declare function replaceI18nPlaceholdersInObject(obj: any, intl: IntlShape, defaultMessages: any): any;
export declare function checkUpdate(): Promise<boolean>;
/** Hide loading and show app */
export declare function showApp(): void;
/**
 * Get intl options from field schema
 * @param fieldSchema
 */
export declare const getIntlOption: (fieldSchema: IMFieldSchema) => Intl.NumberFormatOptions | Intl.DateTimeFormatOptions;
declare type MemorizeFunc = (Object: any) => any;
export declare function memoize(func: MemorizeFunc): MemorizeFunc;
/**
 * Get local storage keys
 */
export declare function readLocalStorageKeys(): string[];
/**
 * Read info by key from local storage.
 * @param key
 */
export declare function readLocalStorage(key: string): any;
/**
 * Set info by key to local storage.
 * @param key
 * @param value
 */
export declare function setLocalStorage(key: string, value: string): void;
export declare function checkAppHigherVersionState(appItem: AppInfo): AppHigherVersionStateType;
/**
 * Get session storage keys
 */
export declare function readSessionStorageKeys(): string[];
/**
 * Read info by key from session storage.
 * @param key
 */
export declare function readSessionStorage(key: string): any;
/**
 * Set info by key to session storage.
 * @param key
 * @param value
 */
export declare function setSessionStorage(key: string, value: string): void;
/**
   * Remvoe info by key from local storage.
   * @param key
   */
export declare function removeFromLocalStorage(key: string): void;
/**
 * Remvoe info by key from session storage.
 * @param key
 */
export declare function removeFromSessionStorage(key: string): void;
export declare function formatNumber(num: number): [string, string];
/**
 * AR -%10
 * TR -%10
 * HE -10%
 */
export declare function formatPercentageNumber(percentage: string): string;
export declare function formatPixelNumber(pixel: string): string;
export declare const getJimuThemeModule: () => typeof jimuThemeModule;
export interface Replacer {
    matcher: (val: string) => boolean;
    handler: (val: string) => string;
}
export declare function replaceStringInObject<T>(obj: T, replacer: Replacer): T;
