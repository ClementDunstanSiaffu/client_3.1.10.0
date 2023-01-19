import { BaseHover } from './base';
export declare class Forward extends BaseHover {
    x: number;
    y: number;
    constructor(option?: {
        offsetX?: number;
        offsetY?: number;
    });
    animateProps(): {
        from: any;
        to: any;
        loop: {
            translateX: string;
            translateY: string;
            reverse: boolean;
        };
    };
    cssProps(): import("@emotion/utils").SerializedStyles;
}
