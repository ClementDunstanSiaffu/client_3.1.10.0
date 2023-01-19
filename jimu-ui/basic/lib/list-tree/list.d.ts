/// <reference types="react" />
/** @jsx jsx */
import { jsx } from 'jimu-core';
import { ThemeProps } from 'jimu-ui';
import { BaseTreeListProps, TreeItemsType } from './common/tree-types';
export declare type ListItemsType = TreeItemsType;
/**
 * The list component props.
 */
export interface ListProps extends BaseTreeListProps {
    /**
     * List item nodes array
     */
    itemsJson?: ListItemsType;
}
export declare function _List(props: ListProps & ThemeProps): jsx.JSX.Element;
/**
 * List component
 *
 * ```ts
 * import { List } from 'jimu-ui/basic/jimu-ui/basic/list-tree'
 * ```
 */
export declare const List: import("react").ForwardRefExoticComponent<Pick<ListProps & ThemeProps, keyof ListProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
