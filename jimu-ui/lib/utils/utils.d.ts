import { IMThemeVariables, IconResult, IMState, LinkType, LinkTo, IMDialogJson } from 'jimu-core';
import { ColorResult, RGBColor } from 'jimu-ui/basic/color-picker';
import { LinearUnit, LinkTarget, ValidityResult } from '../types';
export declare const COLOR_VARIABLE_REGEX: RegExp;
export declare const toColorVariable: (name: string, index?: number) => string;
export declare const isColorVariable: (color: string) => boolean;
export declare const getColorValue: (color: string, theme?: IMThemeVariables) => string;
export declare const isTransparentColor: (color: string) => boolean;
export declare const toColorString: (color: ColorResult) => string;
export declare const toRgba: (color: RGBColor) => string;
/**
 * Convert a string format color to esri symbol color
 * @param value [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 * @param theme
 * @returns string color
 */
export declare const convertJsAPISymbolColorToStringColor: (value: [number, number, number, number]) => string;
/**
 * Convert a string format color to esri symbol color
 * @param value string color
 * @param theme
 * @returns [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 */
export declare const convertStringColorToJsAPISymbolColor: (value: string | number[], theme: IMThemeVariables | IMThemeVariables) => [number, number, number, number];
export declare const isValidColor: (color: string) => boolean;
export declare const isValidNormalColor: (color: string) => boolean;
export declare const getColorAlpha: (color: string) => number;
export declare const setRef: (ref: any, value: any) => void;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
export declare const createChainedFunction: (...funcs: any[]) => any;
export declare function toLinearUnit(cssValue: string | number): LinearUnit;
export declare function stringOfLinearUnit(cssValue: string | number | LinearUnit): string;
export declare const toIconResult: (icon: any, filename: string, size?: number) => IconResult;
export declare const isOutOrTopTargetLink: (linkType: LinkType, href: string, target?: LinkTarget) => boolean;
export declare const capitalizeFirstLetter: (string: string) => string;
/**
 * Check if the specified widget is selected
 * @param widgetId
 */
export declare const isWidgetSelected: (widgetId: string, state?: IMState) => boolean;
export declare function fetchTextInputValidityResult(value: string, checkValidityFunc: (text: string) => ValidityResult | Promise<ValidityResult>): Promise<ValidityResult>;
export declare const isModifiedEvent: (evt: any) => boolean;
export declare const applyLinkStringAndLocation: (evt: any, target: any, linkHref: any, replace: any, history: any, onClick: any) => void;
export declare const applyLinkResult: (props: any) => void;
interface isHrefCanBeChangedProps {
    linkTo: LinkTo;
    currentDialogJson: IMDialogJson;
    isPageDlg: boolean;
    currentPageId: string;
    currentDialogId: string;
    queryObject: any;
    dispatch: any;
    dialogInfos: any;
    currentPageDlgId: any;
}
export declare const isHrefCanBeChanged: (props: isHrefCanBeChangedProps) => boolean;
export declare const isCurrentDlgCanBeClosed: (props: any) => boolean;
export declare const getLinkHrefByLinkResult: (linkTo: any, queryObject: any, history: any) => any;
export {};
