import { Component } from 'react';
declare type IdTextType = {
    id: string;
    text: string;
};
declare type ItemType = {
    typeValue: string;
    timeValue: string;
    textValue: string;
};
declare type FileType = {
    file: string;
    name: string;
    type: string;
    id: string;
};
declare type FormValuesOptionsType = {
    subject: IdTextType[];
    classLevel: IdTextType[];
};
declare type FormValuesType = {
    subjectId: string;
    classLevelId?: string;
    name: string;
    numberOfWeeks: string;
    unitsPerWeek: string;
    content?: string;
    subjectUnits?: string[];
    examinations?: ItemType[];
    material?: FileType[];
};
declare type OnFileAddType = ({ file, onComplete, onError }: {
    file: {
        type: string;
        name: string;
        blob: string;
        tempId: string;
    };
    onComplete: (file: FileType) => void;
    onError: (fileId: string) => void;
}) => void;
export declare type PropsType = {
    mode: 'EDIT';
    initialValues: FormValuesType;
    valueOptions: FormValuesOptionsType;
    onFileClick: (file: FileType) => void;
    onFileAdd: OnFileAddType;
    onFileRemove: (file: FileType) => void;
    onCreate?: (values: FormValuesType) => void;
    onSave: (values: FormValuesType) => void;
    onDelete: () => void;
} | {
    mode: 'NEW';
    initialValues?: FormValuesType;
    valueOptions: FormValuesOptionsType;
    onFileClick: (file: FileType) => void;
    onFileAdd: OnFileAddType;
    onFileRemove: (file: FileType) => void;
    onCreate: (values: FormValuesType) => void;
    onSave?: (values: FormValuesType) => void;
    onDelete?: () => void;
};
interface StateType {
    currentValues: Required<FormValuesType>;
}
export default class TopicTemplateView extends Component<PropsType, StateType> {
    state: StateType;
    constructor(props: PropsType);
    onCreateButtonClick: () => void;
    onSaveButtonClick: () => void;
    onDeleteButtonClick: () => void;
    onFormChange: (value: string | string[] | ItemType[] | FileType[] | {
        id: string;
        level: string;
        text: string;
    }[], key: "name" | "subjectId" | "classLevelId" | "numberOfWeeks" | "unitsPerWeek" | "content" | "subjectUnits" | "examinations" | "material") => void;
    getTextFieldTableCaptions: (numberOfWeeks: string, unitsPerWeek: string) => string[];
    getTimeOptions: (numberOfWeeks: string, unitsPerWeek: string) => {
        text: string;
        value: string;
    }[];
    render(): JSX.Element;
    static defaultProps: {
        onCreate: () => void;
        onSave: () => void;
        onDelete: () => void;
        mode: string;
    };
}
export {};
