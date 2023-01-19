/// <reference types="react" />
import { AllWidgetProps, React, WidgetInjectedProps, RawWidgetType } from 'jimu-core';
export declare type WrappedWidgetTypePartialProps = (React.ComponentClass<Partial<AllWidgetProps<unknown>>> | React.FunctionComponent<Partial<AllWidgetProps<unknown>>>);
export declare type WrappedWidgetProps = Partial<Omit<WidgetInjectedProps<unknown>, 'theme' | 'intl'>>;
/**
 * Wrap a widget for unit testing.
 * The recommended way is to wrap the widget one time, then change props in test cases
 * @param WidgetClass
 * @param props The props here can be considered as default props for a bunch of test cases.
 * @returns
 */
export declare function wrapWidget(WidgetClass: RawWidgetType, props?: WrappedWidgetProps): WrappedWidgetTypePartialProps;
