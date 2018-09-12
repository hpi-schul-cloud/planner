import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import SCTheme from './SchulCloudThemeProvider';

interface PropsType {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.SFC<PropsType> = ({
  label = '',
  placeHolderText = '',
  value = '',
  onChange = () => {}
}) => {
  return (
    <SCTheme>
      <MaterialTextField
        id={label}
        label={label}
        value={value}
        placeholder={placeHolderText}
        onChange={onChange}
        margin="normal"
      />
    </SCTheme>
  );
};

export default TextField;
