import React from 'react';
import styled from 'styled-components';

type PropsType = {
  selected?: string;
  items: {
    id: string;
    text: string;
    color: string;
  }[];
  onChange: (id: string) => void;
};

const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 8px 4px;
  ::before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 8px;
    border-bottom: 1px solid #979797;
  }
  > * {
    margin-right: 10px;
  }
  & :last-child {
    margin-right: 0px;
  }
`;

const StyledItem = styled.div`
  display: inline-block;
  font-family: sans-serif;
  font-size: 14px;
  color: #4a4a4a;
  border-bottom: 3px solid
    ${({ color, isSelected }: { color: string; isSelected: boolean }) =>
      isSelected ? color : 'transparent'};
  cursor: pointer;
  :hover {
    border-bottom: 3px solid
      ${({ color }: { color: string; isSelected: boolean }) =>
        color ? color : 'transparent'};
  }
  padding-bottom: 2px;
`;

const Tabs: React.SFC<PropsType> = props => {
  const { selected, items, onChange } = props;
  const onClick = (id: string) => {
    if (id !== props.selected) onChange(id);
  };

  return (
    <StyledContainer>
      {items.map(item => (
        <StyledItem
          key={item.id}
          isSelected={selected === item.id}
          color={item.color}
          onClick={() => onClick(item.id)}
        >
          {item.text}
        </StyledItem>
      ))}
    </StyledContainer>
  );
};

export default Tabs;
