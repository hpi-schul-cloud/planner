import React from 'react';

interface PropsType {
  initialValue: string;
  values: {
    value: string;
    text: string;
  }[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const Select: React.SFC<PropsType> = ({ initialValue, values, onChange }) => {
  return (
    <select value={initialValue} onChange={onChange}>
      {values.map(option => (
        <option value={option.value} key={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
