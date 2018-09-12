import React from 'react';
import BaseExpansionPanel from '../base/ExpansionPanel';
import BaseSelect from '../base/Select';
import BaseTabs from '../base/Tabs';
import BaseHeadline from '../base/Headline';
import BaseButton from '../base/Button';
import BaseTextField from '../base/TextField';
import BaseTextArea from '../base/TextArea';

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
  caption: string;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
};
type TabsPropsType = {
  selected?: string;
  items: {
    id: string;
    text: string;
    color: string;
  }[];
  onChange: (id: string) => void;
};
type HeadlinePropsType = {
  caption: string;
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
type TextFieldPropsType = {
  label?: string;
  placeHolderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type TextAreaPropsType = {
  value?: string;
  placeHolderText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type ComponentMapType = Readonly<{
  expansionPanel: ComponentType<ExpansionPanelPropsType>;
  select: ComponentType<SelectPropsType>;
  tabs: ComponentType<TabsPropsType>;
  headline: ComponentType<HeadlinePropsType>;
  button: ComponentType<ButtonPropsType>;
  textField: ComponentType<TextFieldPropsType>;
  textArea: ComponentType<TextAreaPropsType>;
}>;

class ComponentProvider {
  readonly defaultComponentMap: ComponentMapType = {
    expansionPanel: BaseExpansionPanel,
    select: BaseSelect,
    tabs: BaseTabs,
    headline: BaseHeadline,
    button: BaseButton,
    textField: BaseTextField,
    textArea: BaseTextArea
  };
  customComponentMap: Partial<ComponentMapType>;

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

  get Button() {
    return this.getElement('button')!;
  }

  get TextField() {
    return this.getElement('textField')!;
  }

  get TextArea() {
    return this.getElement('textArea')!;
  }
}

const componentProvider = new ComponentProvider();

export default componentProvider;

export function setupComponentMap(customComponents: Partial<ComponentMapType>) {
  componentProvider.setupComponentMap(customComponents);
}
