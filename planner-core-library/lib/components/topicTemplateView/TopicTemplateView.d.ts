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
export interface PropsType {
    onCreate: (values: FormValuesType) => void;
    onSave: (values: FormValuesType) => void;
    onDelete: (id: string) => void;
    mode: 'NEW' | 'EDIT';
    initialValues?: FormValuesType;
    id: string;
}
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
    }[], key: "name" | "subject" | "classLevel" | "numberOfWeeks" | "unitsPerPeek" | "content" | "subjectUnits" | "examinations" | "competences") => void;
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
