import React from 'react';
interface PropsType {
    caption: string;
    type?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const Label: React.SFC<PropsType>;
export default Label;
