import React from 'react';
import styled from 'styled-components';
import Button from '../base/Button';
import Select from '../base/Select';
import Input from '../base/TextField';
import { mergeStyles } from '../stylesHelper';
import { ViewStylesType } from '../stylesType';
import { ComponentStylesType } from './stylesType';

export type ItemType = {
  optionIndex: number;
  value: string;
};

interface PropsType {
  options: string[];
  items: ItemType[];
  onChange: (value: ItemType[]) => void;
  styles: ViewStylesType<ComponentStylesType>;
}

const ItemDiv = styled.div`
  > * {
    margin-right: 10px;
    :last-child {
      margin-right: 0px;
    }
  }
  padding-bottom: 5px;
  :last-child {
    padding-bottom: 0px;
  }
`;

function SelectorInput(props: PropsType) {
  function removeItem(index: number) {
    props.onChange([
      ...props.items.slice(0, index),
      ...props.items.slice(index + 1)
    ]);
  }

  function addField() {
    props.onChange([
      ...props.items,
      {
        optionIndex: 0,
        value: ''
      }
    ]);
  }

  function changeField(index: number, optionIndex: number, value: string) {
    props.onChange([
      ...props.items.slice(0, index),
      {
        optionIndex,
        value
      },
      ...props.items.slice(index + 1)
    ]);
  }

  const { options, items, styles } = props;
  return (
    <div>
      {items.map((item, index) => (
        <ItemDiv>
          <Select
            initialValue={item.optionIndex.toString()}
            onChange={event =>
              changeField(
                index,
                parseInt(event.currentTarget.value, 10),
                item.value
              )
            }
            values={options.map((option, index) => ({
              text: option,
              value: index.toString()
            }))}
          />
          <Input
            value={item.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              changeField(index, item.optionIndex, event.target.value)
            }
          />
          <Button onClick={() => removeItem(index)} caption="x" />
        </ItemDiv>
      ))}
      <Button onClick={addField} caption="+" />
    </div>
  );
}

export default SelectorInput;
