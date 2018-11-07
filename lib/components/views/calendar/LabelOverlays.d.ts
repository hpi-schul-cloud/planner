import React from 'react';
declare type PropsType = {
    rasterCount: number;
    rasterSize: number;
    labelArray: {
        startIndex: number;
        endIndex: number;
        name: string;
    }[];
};
declare const LabelOverlays: React.SFC<PropsType>;
export default LabelOverlays;
