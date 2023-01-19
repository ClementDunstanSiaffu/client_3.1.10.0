/// <reference types="react" />
/** @jsx jsx */
import { React, IMThemeVariables } from 'jimu-core';
export interface EditableInputProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    label?: string;
    hideLabel?: boolean;
    value?: number;
    arrowOffset?: number;
    max?: number;
    onChange?: (value: any) => void;
}
export declare const EditableInput: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & {
    theme?: IMThemeVariables;
}>;
