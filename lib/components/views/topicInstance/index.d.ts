import { Component } from 'react';
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
declare type FormValuesType = {
    subject: string;
    classLevel: string;
    name: string;
    parentTemplate: {
        id: string;
        name: string;
    };
    numberOfWeeks: string;
    unitsPerWeek: string;
    content: string;
    subjectUnits: string[];
    examinations: ItemType[];
    material: FileType[];
};
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type CurrentFormStateType = Omit<FormValuesType, 'parentTemplate'>;
export interface PropsType {
    onSave: (values: CurrentFormStateType) => void;
    onDelete: () => void;
    onTemplateClick: (id: string) => void;
    onFileClick: (file: FileType) => void;
    onFileAdd: ({ file, onComplete, onError }: {
        file: {
            type: string;
            name: string;
            blob: string;
            tempId: string;
        };
        onComplete: (file: FileType) => void;
        onError: (fileId: string) => void;
    }) => void;
    onFileRemove: (file: FileType) => void;
    initialValues: Partial<FormValuesType>;
    utcStartDate?: number;
}
interface StateType {
    currentValues: CurrentFormStateType;
}
export default class TopicInstanceView extends Component<PropsType, StateType> {
    state: {
        currentValues: {
            subject: string;
            classLevel: string;
            name: string;
            numberOfWeeks: string;
            unitsPerWeek: string;
            content: string;
            subjectUnits: string[];
            examinations: ItemType[];
            material: FileType[];
        };
    };
    constructor(props: PropsType);
    onDeleteButtonClick: () => void;
    onSaveButtonClick: () => void;
    onFormChange: (value: string | string[] | ItemType[] | {
        id: string;
        level: string;
        text: string;
    }[], key: "name" | "numberOfWeeks" | "unitsPerWeek" | "content" | "subjectUnits" | "examinations" | "material" | "parentTemplate" | "subject" | "classLevel") => void;
    getTextFieldTableCaptions: (numberOfWeeks: string, unitsPerWeek: string) => string[];
    getTimeOptions: (numberOfWeeks: string, unitsPerWeek: string) => {
        text: string;
        value: string;
    }[];
    render(): JSX.Element;
    static defaultProps: {
        onTemplateClick: () => void;
    };
}
export {};
