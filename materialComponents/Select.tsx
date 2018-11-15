import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SCTheme from './SchulCloudThemeProvider';

const styles = () =>
  createStyles({
    formControl: {
      minWidth: 120
    }
  });

interface PropsType  extends WithStyles<typeof styles> {
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
  onChange,
  classes
}) => {
  return (
    <SCTheme>
      <FormControl className={classes.formControl}>
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

export default withStyles(styles)(CustomSelect);
