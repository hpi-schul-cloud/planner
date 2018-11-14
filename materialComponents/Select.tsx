import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SCTheme from './SchulCloudThemeProvider';

interface PropsType {
  caption?: string;
  initialValue: string;
  values: {
    id: string;
    text: string;
  }[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.SFC<PropsType> = ({
  caption,
  initialValue,
  values,
  onChange
}) => {
  return (
    <SCTheme>
      <FormControl>
        <InputLabel htmlFor="select-simple">{caption}</InputLabel>
        <Select
          value={initialValue}
          onChange={onChange}
          inputProps={{
            id: 'select-simple'
          }}
        >
          {values.map(value => (
            <MenuItem key={value.id} value={value.id}>
              {value.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SCTheme>
  );
};

export default CustomSelect;
