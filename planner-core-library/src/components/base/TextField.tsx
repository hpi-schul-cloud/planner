import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 7px 10px;
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 12px;
  color: #5e5e5e;
`;

const Label = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-family: sans-serif;
  font-size: 14px;
  color: #5e5e5e;
`;

interface PropsType {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextField: React.SFC<PropsType> = ({
  label = '',
  placeHolderText = '',
  value = '',
  onChange = () => {},
  className
}) => {
  const labelComponent = label ? <Label>{label}</Label> : null;
  return (
    <div>
      {labelComponent}
      <StyledInput
        placeholder={placeHolderText}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default TextField;
