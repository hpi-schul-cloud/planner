import { Component } from 'react';
declare type ItemType = {
    typeValue: string;
    timeValue: string;
    textValue: string;
};
declare type FormValuesType = {
    subject: string;
    classLevel: string;
    name: string;
    numberOfWeeks: string;
    unitsPerPeek: string;
    content: string;
    subjectUnits: string[];
    examinations: ItemType[];
    competences: {
        id: string;
        level: string;
        text: string;
    }[];
};
export declare type PropsType = {
    mode: 'EDIT';
    initialValues: FormValuesType;
    onCreate?: (values: FormValuesType) => void;
    onSave: (values: FormValuesType) => void;
    onDelete: () => void;
} | {
    mode: 'NEW';
    initialValues?: FormValuesType;
    onCreate: (values: FormValuesType) => void;
    onSave?: (values: FormValuesType) => void;
    onDelete?: () => void;
};
interface StateType {
    currentValues: FormValuesType;
}
export default class TopicTemplateView extends Component<PropsType, StateType> {
    state: {
        currentValues: {
            subject: string;
            classLevel: string;
            name: string;
            numberOfWeeks: string;
            unitsPerPeek: string;
            content: string;
            subjectUnits: never[];
            examinations: never[];
            competences: never[];
        };
    };
    constructor(props: PropsType);
    onCreateButtonClick: () => void;
    onSaveButtonClick: () => void;
    onDeleteButtonClick: () => void;
    onFormChange: (value: string | string[] | ItemType[] | {
        id: string;
        level: string;
        text: string;
    }[], key: "name" | "content" | "subject" | "classLevel" | "numberOfWeeks" | "unitsPerPeek" | "subjectUnits" | "examinations" | "competences") => void;
    getTextFieldTableCaptions: (numberOfWeeks: string, unitsPerPeek: string) => string[];
    render(): JSX.Element;
    static defaultProps: {
        onCreate: () => void;
        onSave: () => void;
        onDelete: () => void;
        mode: string;
    };
}
export {};
