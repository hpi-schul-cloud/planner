import React from 'react';
declare type TextFieldTableProps = {
    label?: string;
    rows: {
        caption: string;
        value: string;
    }[];
    onChange: (newRows: {
        caption: string;
        value: string;
    }[]) => void;
};
declare const TextFieldTable: React.SFC<TextFieldTableProps>;
export default TextFieldTable;
