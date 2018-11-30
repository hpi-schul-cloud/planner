import React, { ReactNode } from 'react';
import BaseExpansionPanel from '../base/ExpansionPanel';
import BaseSelect from '../base/Select';
import BaseTabs from '../base/Tabs';
import BaseLabel from '../base/Label';
import BaseButton from '../base/Button';
import BaseIconButton from '../base/IconButton';
import BaseText from '../base/Text';
import BaseTextField from '../base/TextField';
import BaseTextFieldTable from '../base/TextFieldTable';
import BaseTextArea from '../base/TextArea';
import BaseSelectorInput from '../base/SelectorInput';
import BaseTopicElement from '../base/TopicElement';
import BaseFileSelector from '../base/FileSelector';

type ComponentType<Props> = React.SFC<Props> | React.ComponentClass<Props>;
type FileType = {
  file: string;
  name: string;
  type: string;
  id: string;
};

type ExpansionPanelPropsType = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  caption?: string;
};
type SelectPropsType = {
  initialValue: string;
  values: {
    id: string;
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
type FileSelectorPropsType = {
  files: FileType[];
  onFileClick: (file: FileType) => void;
  onFileAdd: (
    {
      file,
      onComplete,
      onError
    }: {
      file: {
        file: File;
        tempId: string;
      };
      onComplete: (file: FileType) => void;
      onError: (fileId: string) => void;
    }
  ) => void;
  onFileRemove: (file: FileType) => void;
  onFormChange: (newFiles: FileType[]) => void;
};
type LabelPropsType = {
  caption: ReactNode;
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
  label?: ReactNode;
  text: ReactNode;
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
  markers?: { position: number; width: number; text: string }[];
  onClick?: () => void;
};
type ComponentMapType = Readonly<{
  expansionPanel: ComponentType<ExpansionPanelPropsType>;
  select: ComponentType<SelectPropsType>;
  tabs: ComponentType<TabsPropsType>;
  label: ComponentType<LabelPropsType>;
  button: ComponentType<ButtonPropsType>;
  iconButton: ComponentType<IconButtonPropsType>;
  text: ComponentType<TextPropsType>;
  textField: ComponentType<TextFieldPropsType>;
  textFieldTable: ComponentType<TextFieldTablePropsType>;
  textArea: ComponentType<TextAreaPropsType>;
  selectorInput: ComponentType<SelectorInputPropsType>;
  topicElement: ComponentType<TopicElementPropsType>;
  fileSelector: ComponentType<FileSelectorPropsType>;
}>;

class ComponentProvider {
  readonly defaultComponentMap: ComponentMapType = {
    expansionPanel: BaseExpansionPanel,
    select: BaseSelect,
    tabs: BaseTabs,
    label: BaseLabel,
    button: BaseButton,
    iconButton: BaseIconButton,
    text: BaseText,
    textField: BaseTextField,
    textFieldTable: BaseTextFieldTable,
    textArea: BaseTextArea,
    selectorInput: BaseSelectorInput,
    topicElement: BaseTopicElement,
    fileSelector: BaseFileSelector
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

  get FileSelector() {
    return this.getElement('fileSelector')!;
  }

  get Select() {
    return this.getElement('select')!;
  }

  get Tabs() {
    return this.getElement('tabs')!;
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
