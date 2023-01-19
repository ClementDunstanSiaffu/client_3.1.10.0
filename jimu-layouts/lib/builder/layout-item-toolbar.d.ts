/** @jsx jsx */
import { jsx, IMLayoutItemJson, IMThemeVariables } from 'jimu-core';
import { Modifiers } from 'jimu-ui';
import { ToolbarConfig } from 'jimu-layouts/layout-runtime';
export interface LayoutItemToolbarProps {
    layoutId: string;
    layoutItem: IMLayoutItemJson;
    refElement: HTMLElement;
    modifiers: Modifiers;
    builderTheme: IMThemeVariables;
    formatMessage: (string: any, values?: any) => string;
    toolItems?: ToolbarConfig;
    showDefaultTools?: boolean;
}
export declare function LayoutItemToolbar(props: LayoutItemToolbarProps): jsx.JSX.Element;
