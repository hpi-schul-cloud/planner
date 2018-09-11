import React from 'react';
import styled from 'styled-components';

interface PropsType {
  caption?: string;
  initialValue: string;
  values: {
    value: string;
    text: string;
  }[];
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const StyledSelectorLabel = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  color: #4a4a4a;
`;

const Select: React.SFC<PropsType> = ({
  initialValue,
  values,
  caption,
  onChange
}) => {
  return (
    <StyledSelectorLabel>
      {caption}
      <select value={initialValue} onChange={onChange}>
        {values.map(option => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </StyledSelectorLabel>
  );
};

export default Select;
