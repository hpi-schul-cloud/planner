import React from 'react';
import styled from 'styled-components';

interface PropsType {
  value?: string;
  label?: string;
  placeHolderText?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 12px;
  color: #5e5e5e;
  padding: 7px 10px;
`;

const Label = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-family: sans-serif;
  font-size: 14px;
  color: #5e5e5e;
`;

const TextArea: React.SFC<PropsType> = ({
  label = '',
  value = '',
  onChange = () => {}
}) => {
  const labelComponent = label ? <Label>{label}</Label> : null;

  return (
    <div>
      {labelComponent}
      <StyledTextArea value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;
