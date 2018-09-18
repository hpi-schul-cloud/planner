import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import TextField from './TextField';

type TextFieldTableProps = {
  rows: { caption: string; value: string }[];
  onChange: (newRows: { caption: string; value: string }[]) => void;
} & WithStyles<typeof styles>;

const styles = () =>
  createStyles({
    tableCellRoot: {
      padding: '0px 56px 0px 24px'
    },
    tableRowRoot: {
      height: 48
    }
  });

const TextFieldTable: React.SFC<TextFieldTableProps> = ({
  rows,
  classes,
  onChange
}) => {
  function onRowChange(index: number, value: string) {
    onChange([
      ...rows.slice(0, index),
      {
        caption: rows[index].caption,
        value
      },
      ...rows.slice(index + 1)
    ]);
  }

  return (
    <Table padding="dense">
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i} classes={{ root: classes.tableRowRoot }}>
            <TableCell scope="row" classes={{ root: classes.tableCellRoot }}>
              {row.caption}
            </TableCell>
            <TableCell classes={{ root: classes.tableCellRoot }}>
              <TextField
                value={row.value}
                onChange={event => onRowChange(i, event.target.value)}
                margin="dense"
                fullWidth={true}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(TextFieldTable);
