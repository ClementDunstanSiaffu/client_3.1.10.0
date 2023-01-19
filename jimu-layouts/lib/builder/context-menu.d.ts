/// <reference types="react" />
/** @jsx jsx */
import { React, IMThemeVariables, IMLayoutItemJson, IntlShape } from 'jimu-core';
import { ToolbarConfig } from 'jimu-layouts/layout-runtime';
export interface ContextMenuProps {
    layoutId: string;
    layoutItem: IMLayoutItemJson;
    builderTheme: IMThemeVariables;
    positionType: 'left' | 'center' | 'right';
    size: number;
    iconSize: number;
    className: string;
    menuItems: ToolbarConfig;
    rotate?: number;
    children?: React.ReactNode;
}
interface IntlProps {
    intl: IntlShape;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<ContextMenuProps & IntlProps>> & {
    WrappedComponent: React.ComponentType<ContextMenuProps & IntlProps>;
};
export default _default;
