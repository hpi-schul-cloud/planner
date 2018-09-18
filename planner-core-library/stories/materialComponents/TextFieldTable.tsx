import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TextField from './TextField';

type TextFieldTableProps = {
  rows: { caption: string; value: string }[];
  onChange: (newRows: { caption: string; value: string }[]) => void;
};

const TextFieldTable: React.SFC<TextFieldTableProps> = ({ rows, onChange }) => {
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
          <TableRow key={i}>
            <TableCell scope="row">{row.caption}</TableCell>
            <TableCell>
              <TextField
                value={row.value}
                onChange={event => onRowChange(i, event.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TextFieldTable;
