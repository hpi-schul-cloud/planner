import React from 'react';
import BaseExpansionPanel from '../base/ExpansionPanel';
import BaseSelect from '../base/Select';
import BaseTabs from '../base/Tabs';
import BaseHeadline from '../base/Headline';
import BaseLabel from '../base/Label';
import BaseButton from '../base/Button';
import BaseIconButton from '../base/IconButton';
import BaseText from '../base/Text';
import BaseTextField from '../base/TextField';
import BaseTextFieldTable from '../base/TextFieldTable';
import BaseTextArea from '../base/TextArea';
import BaseChip from '../base/Chip';
import BaseSelectorInput from '../base/SelectorInput';
import BaseTopicElement from '../base/TopicElement';

type ComponentType<Props> = React.SFC<Props> | React.ComponentClass<Props>;

type ExpansionPanelPropsType = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  caption?: string;
};
type SelectPropsType = {
  initialValue: string;
  values: {
    value: string;
    text: string;
  }[];
  caption?: string;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
};
type TabsPropsType = {
  selected?: string;
  items: {
    id: string;
    text: string;
    color?: string;
  }[];
  onChange: (id: string) => void;
};
type HeadlinePropsType = {
  caption: string;
};
type LabelPropsType = {
  caption: string;
  type?: 'small' | 'medium' | 'large';
  className?: string;
};
type ButtonPropsType = {
  className?: string;
  caption: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'bold' | 'thin';
  onClick?: () => void;
};
type IconButtonPropsType = {
  iconType: 'ADD';
  onClick: () => void;
};
type TextPropsType = {
  label?: string;
  text: string;
};
type TextFieldPropsType = {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type TextFieldTablePropsType = {
  rows: { caption: string; value: string }[];
  onChange: (newRows: { caption: string; value: string }[]) => void;
};
type TextAreaPropsType = {
  value?: string;
  placeHolderText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
type ChipPropsType = {
  firstLabel?: string;
  secondLabel?: string;
  onDeleteClick?: () => void;
};
type SelectorInputPropsType = {
  typeOptions: { text: string; value: string }[];
  timeOptions: { text: string; value: string }[];
  values: {
    typeValue: string;
    timeValue: string;
    textValue: string;
  }[];
  onChange: (
    values: {
      typeValue: string;
      timeValue: string;
      textValue: string;
    }[]
  ) => void;
};
type TopicElementPropsType = {
  width: number;
  height: number;
  text?: string;
  color: string;
  onClick?: () => void;
};

type ComponentMapType = Readonly<{
  expansionPanel: ComponentType<ExpansionPanelPropsType>;
  select: ComponentType<SelectPropsType>;
  tabs: ComponentType<TabsPropsType>;
  headline: ComponentType<HeadlinePropsType>;
  label: ComponentType<LabelPropsType>;
  button: ComponentType<ButtonPropsType>;
  iconButton: ComponentType<IconButtonPropsType>;
  text: ComponentType<TextPropsType>;
  textField: ComponentType<TextFieldPropsType>;
  textFieldTable: ComponentType<TextFieldTablePropsType>;
  textArea: ComponentType<TextAreaPropsType>;
  chip: ComponentType<ChipPropsType>;
  selectorInput: ComponentType<SelectorInputPropsType>;
  topicElement: ComponentType<TopicElementPropsType>;
}>;

class ComponentProvider {
  readonly defaultComponentMap: ComponentMapType = {
    expansionPanel: BaseExpansionPanel,
    select: BaseSelect,
    tabs: BaseTabs,
    headline: BaseHeadline,
    label: BaseLabel,
    button: BaseButton,
    iconButton: BaseIconButton,
    text: BaseText,
    textField: BaseTextField,
    textFieldTable: BaseTextFieldTable,
    textArea: BaseTextArea,
    chip: BaseChip,
    selectorInput: BaseSelectorInput,
    topicElement: BaseTopicElement
  };
  customComponentMap: Partial<ComponentMapType> = {};

  setupComponentMap(customComponents: Partial<ComponentMapType>) {
    this.customComponentMap = customComponents;
  }

  getElement<K extends keyof ComponentMapType>(id: K) {
    return this.customComponentMap[id] || this.defaultComponentMap[id];
  }

  get ExpansionPanel() {
    return this.getElement('expansionPanel')!;
  }

  get Select() {
    return this.getElement('select')!;
  }

  get Tabs() {
    return this.getElement('tabs')!;
  }

  get Headline() {
    return this.getElement('headline')!;
  }

  get Label() {
    return this.getElement('label')!;
  }

  get Button() {
    return this.getElement('button')!;
  }

  get IconButton() {
    return this.getElement('iconButton')!;
  }

  get Text() {
    return this.getElement('text')!;
  }

  get TextField() {
    return this.getElement('textField')!;
  }

  get TextFieldTable() {
    return this.getElement('textFieldTable')!;
  }

  get TextArea() {
    return this.getElement('textArea')!;
  }

  get Chip() {
    return this.getElement('chip')!;
  }

  get SelectorInput() {
    return this.getElement('selectorInput')!;
  }

  get TopicElement() {
    return this.getElement('topicElement')!;
  }
}

const componentProvider = new ComponentProvider();

export default componentProvider;

export function setupComponentMap(customComponents: Partial<ComponentMapType>) {
  componentProvider.setupComponentMap(customComponents);
}
