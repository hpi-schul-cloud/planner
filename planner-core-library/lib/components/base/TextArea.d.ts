import React from 'react';
interface PropsType {
    value?: string;
    label?: string;
    placeHolderText?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare const TextArea: React.SFC<PropsType>;
export default TextArea;
