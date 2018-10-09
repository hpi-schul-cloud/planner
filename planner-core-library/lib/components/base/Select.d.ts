import React from 'react';
interface PropsType {
    caption?: string;
    initialValue: string;
    values: {
        value: string;
        text: string;
    }[];
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}
declare const Select: React.SFC<PropsType>;
export default Select;
