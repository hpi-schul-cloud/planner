import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.div`
  font-size: 14px;
  color: #4a4a4a;
  font-family: sans-serif;
  font-weight: normal;
  margin-bottom: 5px;
`;

interface PropsType {
  caption: string;
  type?: 'small' | 'medium' | 'large';
  className?: string;
}

const Label: React.SFC<PropsType> = ({
  caption,
  className,
  type = 'medium'
}) => {
  return <StyledLabel className={className}>{caption}</StyledLabel>;
};

export default Label;
