import React from 'react';
import styled from 'styled-components';
import TextField from './TextField';

type TextFieldTableProps = {
  rows: { caption: string; value: string }[];
  onChange: (newRows: { caption: string; value: string }[]) => void;
};

const StyledCell = styled.div`
  display: table-cell;
  padding: 5px 10px;
  border: none;
  font-family: sans-serif;
  font-size: 14px;
  color: #4a4a4a;
`;

const StyledRow = styled.div`
  display: table-row;
  ${StyledCell}:nth-child(1) {
    border-right: 1px solid #979797;
  }
`;

const StyledTable = styled.div`
  display: table;
  border: 1px solid #979797;
  border-radius: 5px;
  ${StyledRow}:nth-child(2n + 1) {
    background: #f7f7f7;
  }
  ${StyledRow}:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  ${StyledRow}:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

const StyledTextField = styled(TextField)`
  background: none;
  border: none;
`;

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
    <StyledTable>
      {rows.map((row, i) => (
        <StyledRow key={i}>
          <StyledCell>{row.caption}</StyledCell>
          <StyledCell>
            <StyledTextField
              value={row.value}
              onChange={event => onRowChange(i, event.target.value)}
            />
          </StyledCell>
        </StyledRow>
      ))}
    </StyledTable>
  );
};

export default TextFieldTable;
