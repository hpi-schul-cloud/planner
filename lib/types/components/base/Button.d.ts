import React from 'react';
interface PropsType {
    className?: string;
    caption: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
    type?: 'default' | 'bold' | 'thin';
    onClick?: () => void;
}
declare const Button: React.SFC<PropsType>;
export default Button;
