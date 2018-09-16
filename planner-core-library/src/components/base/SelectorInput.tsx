import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Select from './Select';
import TextField from './TextField';

export type ItemType = {
  typeValue: string;
  timeValue: string;
  textValue: string;
};

interface PropsType {
  typeOptions: { text: string; value: string }[];
  timeOptions: { text: string; value: string }[];
  values: ItemType[];
  onChange: (values: ItemType[]) => void;
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
      ...props.values.slice(0, index),
      ...props.values.slice(index + 1)
    ]);
  }

  function addField() {
    props.onChange([
      ...props.values,
      {
        typeValue: props.typeOptions[0].value,
        timeValue: props.timeOptions[0].value,
        textValue: ''
      }
    ]);
  }

  function changeField(index: number, newValue: Partial<ItemType>) {
    props.onChange([
      ...props.values.slice(0, index),
      {
        ...props.values[index],
        ...newValue
      },
      ...props.values.slice(index + 1)
    ]);
  }

  const { typeOptions, timeOptions, values } = props;
  return (
    <div>
      {values.map((value, index) => (
        <ItemDiv>
          <Select
            initialValue={value.typeValue}
            onChange={event =>
              changeField(index, { typeValue: event.currentTarget.value })
            }
            values={typeOptions.map(option => ({
              text: option.text,
              value: option.value
            }))}
          />
          <Select
            initialValue={value.timeValue}
            onChange={event =>
              changeField(index, { timeValue: event.currentTarget.value })
            }
            values={timeOptions.map(option => ({
              text: option.text,
              value: option.value
            }))}
          />
          <TextField
            value={value.textValue}
            onChange={event =>
              changeField(index, { textValue: event.currentTarget.value })
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
