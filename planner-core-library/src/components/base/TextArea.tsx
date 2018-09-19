import React from 'react';
import styled from 'styled-components';
import Label from './Label';

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

const StyledTextAreaContainer = styled.div`
  margin: 5px 0px;
  display: inline-flex;
  flex-direction: column;
`;

const TextArea: React.SFC<PropsType> = ({
  label = '',
  value = '',
  onChange = () => {}
}) => {
  const labelComponent = label ? <Label caption={label} /> : null;

  return (
    <StyledTextAreaContainer>
      {labelComponent}
      <StyledTextArea value={value} onChange={onChange} />
    </StyledTextAreaContainer>
  );
};

export default TextArea;
