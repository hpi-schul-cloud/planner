import React from "react";
import styled from "styled-components";

const Select = styled.select`
  ${({ styles }: { styles?: string }) => styles};
`;

export default Select;
