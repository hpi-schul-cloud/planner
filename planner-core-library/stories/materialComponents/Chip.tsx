import React from 'react';
import Chip from '@material-ui/core/Chip';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import SCTheme from './SchulCloudThemeProvider';

interface PropsType extends WithStyles<typeof styles> {
  firstLabel?: string;
  secondLabel?: string;
  onDeleteClick?: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      justifyContent: 'left'
    },
    label: {
      minWidth: '0px'
    }
  });

const CustomChip: React.SFC<PropsType> = ({
  firstLabel = '',
  secondLabel = '',
  onDeleteClick = () => {},
  classes
}) => {
  return (
    <SCTheme>
      <Chip
        color="primary"
        variant="outlined"
        onDelete={onDeleteClick}
        classes={classes}
        label={
          <div
            style={{
              maxWidth: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >{`${firstLabel}  |  ${secondLabel}`}</div>
        }
      />
    </SCTheme>
  );
};

export default withStyles(styles)(CustomChip);
