import { TreeItemInRelationType, TreeItemType, TreeItemsType, TreeItemActionType } from './tree-types';
/**
 * Check if or how many children items are checked
 * - if the item has children
 *   - returns true if all children items are checked
 *   - returns false if no children items are checked
 *   - returns the count of checked items if only certain children items are checked
 * - if the item has no children
 *   - returns the item's own check state(itemStateChecked)
 */
export declare const getCheckProgress: (treeItem: TreeItemType, options?: Record<string, any>) => (boolean | number);
/**
 * Get the child items of another tree/list item
 * @param itemJsons: tree/list item data in a child-parent relation array
 */
export declare const getItemChildren: (itemJsons: TreeItemInRelationType) => TreeItemsType;
/**
 * a util function to execute the corresponding callback function of the action
 */
export declare const handleAction: (actionKey: any, actionData: any, refComponent: any) => any;
export declare function shouldHandleKeyEvent(evt: any): boolean;
/**
 * a util function to get all invisible actions
 */
export declare const getInvisibleActionMap: (treeItemActions: TreeItemActionType[]) => {};
export declare const getPathOfItemJsons: (itemJsons: any) => any;
/**
 * get actionData by changeItemJson
 */
export declare const getActionDataByChangeJson: (isTree: any, actionData: any) => any;
/**
 * get actionData by checkbox changed
 */
export declare const getActionDataByCBXActionData: (isTree: any, actionData: any) => any;
export declare function updateStatesForParents(data: any, itemPath: any, isChecked: any, minus?: boolean): any;
/**
 * return rootItemJson with updated check sates.
 * Two states: Checkbox, Indeterminate
 * For removedItem's parents and newAddedItem's parents
 */
export declare function getItemJsonsWithCheckState(actionData: any, refComponent: any): any;
