import React from 'react';
interface PropsType {
    label?: string;
    placeHolderText?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    margin?: 'none' | 'dense' | 'normal';
    className?: string;
    fullWidth?: boolean;
}
declare const TextField: React.SFC<PropsType>;
export default TextField;
