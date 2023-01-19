import { CreatToolActions } from '../../constraints';
export declare const overwriteAPIStyles: () => import("jimu-core").SerializedStyles;
export declare const getHideBorderClass: (isHideBorder: boolean) => string;
export declare const getHideBgColorClass: (isHideBgColor: boolean) => string;
export declare const getSelectionToolClass: (selectionTools: any, updateOnGraphicClick: boolean) => string;
export declare const insertCustomDom: (container: HTMLElement, btnContainer: HTMLElement, collapseBtnContainer: HTMLElement, disableSymbolSelector: boolean) => void;
export declare const getCurrentActiveBtn: (newActiveTool: CreatToolActions, toolbarContainer: HTMLElement) => Element;
export declare const _isPopperOpen: (disableSymbolSelector: any, isPanelOpened: any, currentActiveTool: any) => boolean;
