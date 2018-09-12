import React from 'react';
import styled from 'styled-components';

type PropsType = {
  firstLabel?: string;
  secondLabel?: string;
  onDeleteClick?: () => void;
};

const StyledChip = styled.div`
  background: #f2f2f2;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  @media (max-width: 400px) {
    padding: 5px 5px;
  }
`;

const StyledFlexChild = styled.div`
  min-width: 0px;
  display: flex;
  align-items: baseline;
`;

const StyledBigLabel = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  color: #4a4a4a;
`;

const StyledCloseLabel = styled(StyledBigLabel)`
  cursor: pointer;
  padding: 0px 5px;
  :hover {
    color: #797979;
  }
`;
const StyledFirstlabel = styled(StyledBigLabel)`
  margin-right: 10px;
  min-width: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
  @media (max-width: 400px) {
    margin-right: 5px;
  }
`;

const StyledSecondLabel = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: #4a4a4a;
  min-width: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Chip: React.SFC<PropsType> = ({
  firstLabel = '',
  secondLabel = '',
  onDeleteClick = () => {}
}) => {
  return (
    <StyledChip>
      <StyledFlexChild>
        <StyledFirstlabel>{firstLabel}</StyledFirstlabel>
        <StyledSecondLabel>{secondLabel}</StyledSecondLabel>
      </StyledFlexChild>
      <StyledCloseLabel onClick={onDeleteClick}>x</StyledCloseLabel>
    </StyledChip>
  );
};

export default Chip;
