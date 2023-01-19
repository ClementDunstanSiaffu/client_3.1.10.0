import * as React from 'react';
import { ImmutableArray } from 'seamless-immutable';
import { IntlShape } from 'react-intl';
import { IMExpressionMap, IMExpression } from './types/expression';
import { IMDataSourceInfo } from './types/state';
import { DataRecord, DataSource, QueryParams } from './data-sources/data-source-interface';
import { UseDataSource } from './types/app-config';
import { RepeatedDataSource } from './repeat-data-source-context';
/**
 * If passing in multiple expressions, the changed results will contain multiple `SingleExpressionResolveResult`s.
 */
export interface MultipleExpressionResolveResults {
    [expressionId: string]: SingleExpressionResolveResult;
}
/**
 * Single expression resolve result.
 */
export interface SingleExpressionResolveResult {
    /**
     * Whether the resolve is successful.
     */
    isSuccessful: boolean;
    /**
     * Result value.
     * If succeed, the value is a string of the resolving result.
     * If failed, the value is `ExpressionResolverErrorCode`.
     */
    value: string | ExpressionResolverErrorCode;
}
/**
 * The function will be called whenever resolved results change.
 */
export declare type ResolverRenderFunction = (resolvedResults: MultipleExpressionResolveResults | SingleExpressionResolveResult) => React.ReactNode;
/**
 * If resolving expression fails, the error code will be returned to indicate the reason for the failure.
 */
export declare enum ExpressionResolverErrorCode {
    /**
     * Failed to resolve the expression
     */
    Failed = "RESOLVE_FAILED",
    /**
     * Expression not resolved since some data sources in the expression were not in widget's `useDataSources`.
     */
    NotMatched = "DATA_SOURCES_IN_EXPRESSION_CANNOT_MATCH_DATA_SOURCES_IN_USE"
}
/**
 * The ExpressionResolverComponent component props.
 */
export interface ExpressionResolverComponentProps {
    /**
     * Expressions that need to be resolved.
     */
    expression: IMExpressionMap | IMExpression;
    /**
     * Id of the widget.
     */
    widgetId: string;
    /**
     * Widget's `useDataSources`, the data sources that the widget is using.
     * If the data source of one expression part is not in the array, this part will not be resolved.
     *
     * Must pass in one of `useDataSources` and `records`.
     */
    useDataSources?: ImmutableArray<UseDataSource>;
    /**
     * If included, it will use these `records` to resolve the expression.
     * If not, it will use `useDataSources` to create the data source instances, then use these data sources to resolve the expression.
     *
     * Must pass in one of `useDataSources` and `records`.
     */
    records?: {
        [dataSourceId: string]: DataRecord[];
    };
    /**
     * If one of children components' rendering depends on the resolved result, you can choose to use this render function.
     */
    children?: ResolverRenderFunction | React.ReactNode;
    /**
     * Whether or not the expression is resolved successfully, the function will be called.
     */
    onChange?: (resolvedResults: MultipleExpressionResolveResults | SingleExpressionResolveResult) => void;
}
interface ExtraProps {
    /**
     * @ignore
     */
    intl: IntlShape;
    /**
     * @ignore
     */
    repeatedDataSource: RepeatedDataSource | RepeatedDataSource[];
}
interface State {
    results: MultipleExpressionResolveResults | SingleExpressionResolveResult;
    infos: {
        [dataSourceId: string]: IMDataSourceInfo;
    };
    allUseDataSources: ImmutableArray<UseDataSource>;
    queries: {
        [dataSourceId: string]: QueryParams;
    };
}
/**
 * @ignore
 */
export declare class _ExpressionResolverComponent extends React.PureComponent<ExpressionResolverComponentProps & ExtraProps, State> {
    dataSources: {
        [dataSourceId: string]: DataSource;
    };
    resultsCache: MultipleExpressionResolveResults | SingleExpressionResolveResult;
    __unmount: boolean;
    __resolveCount: number;
    constructor(props: ExpressionResolverComponentProps & ExtraProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ExpressionResolverComponentProps & ExtraProps, prevState: State): void;
    getWhetherNewLocalDssCreated(prevResults: MultipleExpressionResolveResults | SingleExpressionResolveResult, results: MultipleExpressionResolveResults | SingleExpressionResolveResult): boolean;
    getAllUseDataSources(useDataSources: ImmutableArray<UseDataSource>, expression: IMExpressionMap | IMExpression): ImmutableArray<UseDataSource>;
    /**
     * If an expression is using selection view, its used data source may be the main data source. We allow to select main data source and generate expression only for selected records.
     * To listen changes of selection view, we need to add it to used data sources.
     */
    updateUseDssByExpression(useDataSources: ImmutableArray<UseDataSource>, expression: IMExpression): ImmutableArray<UseDataSource>;
    getLocalLoadId(): string;
    getWhetherExpressionsAreSame: (exp: IMExpressionMap | IMExpression, prevExp: IMExpressionMap | IMExpression) => boolean;
    getWhetherDsInfosAreSame: (infos: {
        [dataSourceId: string]: IMDataSourceInfo;
    }, prevInfos: {
        [dataSourceId: string]: IMDataSourceInfo;
    }, expression: IMExpressionMap | IMExpression) => boolean;
    getUseSelectionDsIdsFromExpression: (expression: IMExpressionMap | IMExpression) => string[];
    getUseSelectionDsIdsFromSingleExpression: (expression: IMExpression) => string[];
    getWhetherUseDssAreSame: (useDss: ImmutableArray<UseDataSource>, prevUseDss: ImmutableArray<UseDataSource>) => boolean;
    getWhetherIsMultipleExpression: (expression: IMExpression | IMExpressionMap) => boolean;
    resolveExpressions: (expression: IMExpressionMap | IMExpression, useDataSources: ImmutableArray<UseDataSource>, records: {
        [dataSourceId: string]: DataRecord[];
    }, currentResolveCount: number) => Promise<string>;
    resolveSingleExpression: (expression: IMExpression, useDataSources: ImmutableArray<UseDataSource>, records: {
        [dataSourceId: string]: DataRecord[];
    }) => Promise<string>;
    onDataSourceCreated: (dss: {
        [dataSourceId: string]: DataSource;
    }) => void;
    onDataSourceInfoChange: (infos: {
        [dataSourceId: string]: IMDataSourceInfo;
    }) => void;
    getWhetherExpressionDssInUseDss: (expression: IMExpression, useDataSources: ImmutableArray<UseDataSource>) => boolean;
    getWhetherDsIdInUseDss: (dsId: string, useDataSources: ImmutableArray<UseDataSource>) => boolean;
    getWhetherExpressioniDssInRecords: (expression: IMExpression, records: {
        [dataSourceId: string]: DataRecord[];
    }) => boolean;
    /**
     * When resolve functions (statistics), it will create local data sources.
     * Need to listen to the changes of these local data sources to know data source is refreshed.
     */
    getLocalDataSources: (useDataSources: ImmutableArray<UseDataSource>) => ImmutableArray<UseDataSource>;
    getQueries: (useDataSources: ImmutableArray<UseDataSource>, expression: IMExpressionMap | IMExpression) => {
        [dataSourceId: string]: QueryParams;
    };
    render(): JSX.Element;
}
/**
 * The component is used to resolve `Expression`.
 * In most cases, passing on `useDataSources`, `expression` and `widgetId`, you can get the resolved result in the function `onChange`.
 *
 * ```ts
 * import { ExpressionResolverComponent } from 'jimu-core'
 * ```
 */
export declare const ExpressionResolverComponent: React.FC<import("react-intl").WithIntlProps<Omit<ExpressionResolverComponentProps & ExtraProps, "repeatedDataSource">>> & {
    WrappedComponent: React.ComponentType<Omit<ExpressionResolverComponentProps & ExtraProps, "repeatedDataSource">>;
};
export {};
