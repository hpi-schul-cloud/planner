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
    value: string;
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
        <InputLabel htmlFor="age-simple">{caption}</InputLabel>
        <Select
          value={initialValue}
          onChange={onChange}
          inputProps={{
            name: 'age',
            id: 'age-simple'
          }}
        >
          {values.map(value => (
            <MenuItem key={value.value} value={value.value}>
              {value.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SCTheme>
  );
};

export default CustomSelect;
