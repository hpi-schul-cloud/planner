import React from 'react';
import Button from '@material-ui/core/Button';
import SCTheme from './SchulCloudThemeProvider';

interface PropsType {
  className?: string;
  caption: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'bold' | 'thin';
  onClick?: () => void;
}

const getVariant = (type: string): 'outlined' | 'contained' | 'text' => {
  return {
    default: 'outlined',
    bold: 'contained',
    thin: 'text'
  }[type];
};

const CustomButton: React.SFC<PropsType> = ({
  caption,
  onClick,
  disabled = false,
  color = 'default',
  type = 'default',
  size = 'medium'
}) => {
  const variant = getVariant(type);

  return (
    <SCTheme>
      <Button
        variant={variant}
        size={size}
        color={color}
        onClick={onClick}
        disabled={disabled}
      >
        {caption}
      </Button>
    </SCTheme>
  );
};
export default CustomButton;
