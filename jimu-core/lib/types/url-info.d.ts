import { ImmutableObject } from 'seamless-immutable';
/**
 * Single urlInfo.
 */
export interface UrlInfo {
    name: string;
    parts: UrlInfoPart[];
}
/**
 * Single immutable urlInfo.
 */
export declare type IMUrlInfo = ImmutableObject<UrlInfo>;
/**
 * Multiple urlInfo.
 */
export interface UrlInfoMap {
    [urlInfoId: string]: UrlInfo;
}
/**
 * Multiple immutable expressions.
 */
export declare type IMUrlInfoMap = ImmutableObject<UrlInfoMap>;
/**
 * @ignore
 */
export declare type UrlInfoPartGoup = UrlInfoPartType & {
    parts?: UrlInfoPartGoup[];
};
/**
 * A part of one single expression.
 */
export interface UrlInfoPart {
    type: UrlInfoPartType;
    urlsearch: string;
}
/**
 * Types of the expression part.
 */
export declare enum UrlInfoPartType {
    /**
     * The part is an url info.
     */
    Urlinfo = "URLINFO"
}
