import React from 'react';
declare type PropsType = {
    selected?: string;
    items: {
        id: string;
        text: string;
        color?: string;
    }[];
    onChange: (id: string) => void;
};
declare const Tabs: React.SFC<PropsType>;
export default Tabs;
