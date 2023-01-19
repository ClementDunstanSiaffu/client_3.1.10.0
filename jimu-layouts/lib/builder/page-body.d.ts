/** @jsx jsx */
import { jsx, PagePart, BrowserSizeMode, IMPageJson, ImmutableObject } from 'jimu-core';
import { PageContextProps } from 'jimu-layouts/layout-runtime';
export interface PageBodyProps {
    pageJson: IMPageJson;
    renderedPageId: string;
    activePagePart: PagePart;
    browserSizeMode: BrowserSizeMode;
    pageContext: ImmutableObject<PageContextProps>;
    visible: boolean;
    headerFooterHeight: number;
}
export declare function PageBody(props: PageBodyProps): jsx.JSX.Element;
