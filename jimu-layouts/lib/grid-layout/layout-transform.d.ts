import { extensionSpec, LayoutType, IMLayoutItemJson, BrowserSizeMode, IMLayoutJson } from 'jimu-core';
export declare class GridLayoutTransformer implements extensionSpec.LayoutTransformerExtension {
    id: string;
    layoutType: LayoutType;
    transformLayout(layout: IMLayoutJson, fromSizeMode: BrowserSizeMode, toSizeMode: BrowserSizeMode): IMLayoutJson;
    transformLayoutItem(item: IMLayoutItemJson, index: number, fromLayoutId: string, toLayoutId: string, fromSizeMode: BrowserSizeMode, toSizeMode: BrowserSizeMode): {
        item: IMLayoutItemJson;
        index: number;
    };
}
