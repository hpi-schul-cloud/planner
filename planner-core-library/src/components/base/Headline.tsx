import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-family: sans-serif;
  font-size: 36px;
  color: #5e5e5e;
  font-weight: normal;
  margin: 20px 0;
`;

interface PropsType {
  caption: string;
}

const Headline: React.SFC<PropsType> = ({ caption }) => {
  return <StyledHeading>{caption}</StyledHeading>;
};

export default Headline;
