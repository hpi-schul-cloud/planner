import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import SCTheme from './SchulCloudThemeProvider';

interface PropsType {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  margin?: 'dense' | 'normal';
  fullWidth?: boolean;
}

const TextField: React.SFC<PropsType> = ({
  label = '',
  placeHolderText = '',
  value = '',
  onChange = () => {},
  margin = 'normal',
  fullWidth = false
}) => {
  return (
    <SCTheme>
      <MaterialTextField
        id={label}
        label={label}
        value={value}
        placeholder={placeHolderText}
        onChange={onChange}
        margin={margin}
        fullWidth={fullWidth}
      />
    </SCTheme>
  );
};

export default TextField;
