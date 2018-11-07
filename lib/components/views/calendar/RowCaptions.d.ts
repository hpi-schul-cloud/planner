import React from 'react';
interface PropsType {
    className?: string;
    labels: {
        topLabel: string;
        subLabels: string[];
    }[];
}
declare const RowCaptions: React.SFC<PropsType>;
export default RowCaptions;
