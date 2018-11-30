import React, { ReactNode } from 'react';
declare type ComponentType<Props> = React.SFC<Props> | React.ComponentClass<Props>;
declare type FileType = {
    file: string;
    name: string;
    type: string;
    id: string;
};
declare type ExpansionPanelPropsType = {
    className?: string;
    children: string | JSX.Element | JSX.Element[];
    caption?: string;
};
declare type SelectPropsType = {
    initialValue: string;
    values: {
        id: string;
        text: string;
    }[];
    caption?: string;
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
};
declare type TabsPropsType = {
    selected?: string;
    items: {
        id: string;
        text: string;
        color?: string;
    }[];
    onChange: (id: string) => void;
};
declare type FileSelectorPropsType = {
    files: FileType[];
    onFileClick: (file: FileType) => void;
    onFileAdd: ({ file, onComplete, onError }: {
        file: {
            file: File;
            tempId: string;
        };
        onComplete: (file: FileType, tempId: string) => void;
        onError: (tempId: string) => void;
    }) => void;
    onFileRemove: (file: FileType) => void;
    onFormChange: (newFiles: FileType[]) => void;
};
declare type LabelPropsType = {
    caption: ReactNode;
    type?: 'small' | 'medium' | 'large';
    className?: string;
};
declare type ButtonPropsType = {
    className?: string;
    caption: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
    type?: 'default' | 'bold' | 'thin';
    onClick?: () => void;
};
declare type IconButtonPropsType = {
    iconType: 'ADD';
    onClick: () => void;
};
declare type TextPropsType = {
    label?: ReactNode;
    text: ReactNode;
};
declare type TextFieldPropsType = {
    label?: string;
    placeHolderText?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare type TextFieldTablePropsType = {
    rows: {
        caption: string;
        value: string;
    }[];
    onChange: (newRows: {
        caption: string;
        value: string;
    }[]) => void;
};
declare type TextAreaPropsType = {
    value?: string;
    placeHolderText?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
declare type SelectorInputPropsType = {
    typeOptions: {
        text: string;
        value: string;
    }[];
    timeOptions: {
        text: string;
        value: string;
    }[];
    values: {
        typeValue: string;
        timeValue: string;
        textValue: string;
    }[];
    onChange: (values: {
        typeValue: string;
        timeValue: string;
        textValue: string;
    }[]) => void;
};
declare type TopicElementPropsType = {
    width: number;
    height: number;
    text?: string;
    color: string;
    markers?: {
        position: number;
        width: number;
        text: string;
    }[];
    onClick?: () => void;
};
declare type ComponentMapType = Readonly<{
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
declare class ComponentProvider {
    readonly defaultComponentMap: ComponentMapType;
    customComponentMap: Partial<ComponentMapType>;
    setupComponentMap(customComponents: Partial<ComponentMapType>): void;
    getElement<K extends keyof ComponentMapType>(id: K): Partial<Readonly<{
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
    }>>[K];
    readonly ExpansionPanel: ComponentType<ExpansionPanelPropsType>;
    readonly FileSelector: ComponentType<FileSelectorPropsType>;
    readonly Select: ComponentType<SelectPropsType>;
    readonly Tabs: ComponentType<TabsPropsType>;
    readonly Label: ComponentType<LabelPropsType>;
    readonly Button: ComponentType<ButtonPropsType>;
    readonly IconButton: ComponentType<IconButtonPropsType>;
    readonly Text: ComponentType<TextPropsType>;
    readonly TextField: ComponentType<TextFieldPropsType>;
    readonly TextFieldTable: ComponentType<TextFieldTablePropsType>;
    readonly TextArea: ComponentType<TextAreaPropsType>;
    readonly SelectorInput: ComponentType<SelectorInputPropsType>;
    readonly TopicElement: ComponentType<TopicElementPropsType>;
}
declare const componentProvider: ComponentProvider;
export default componentProvider;
export declare function setupComponentMap(customComponents: Partial<ComponentMapType>): void;
