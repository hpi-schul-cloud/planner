import React, { ReactNode } from 'react';
interface PropsType {
    caption: ReactNode;
    type?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const Label: React.SFC<PropsType>;
export default Label;
