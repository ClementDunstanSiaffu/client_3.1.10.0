/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux } from 'jimu-core';
import { DataSourceItemProps } from '../types';
export declare const DataSourceItem: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<any>> & {
    WrappedComponent: React.ComponentType<any>;
}, Omit<import("react-intl").WithIntlProps<any>, "widgets" | "dispatch"> & DataSourceItemProps & ReactRedux.ConnectProps>;
