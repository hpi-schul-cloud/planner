import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import SCTheme from './SchulCloudThemeProvider';

interface PropsType {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.SFC<PropsType> = ({
  label = '',
  placeHolderText = '',
  value = '',
  onChange = () => {}
}) => {
  return (
    <SCTheme>
      <MaterialTextField
        id={label}
        placeholder={placeHolderText}
        label={label}
        value={value}
        onChange={onChange}
        margin="dense"
        multiline={true}
        rows={6}
        rowsMax={20}
      />
    </SCTheme>
  );
};

export default TextArea;
