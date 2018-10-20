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
    onSave: (values: FormValuesType) => void;
    onDelete: (id: string) => void;
    initialValues: Partial<FormValuesType>;
    id: string;
}
interface StateType {
    currentValues: FormValuesType;
}
export default class TopicInstanceView extends Component<PropsType, StateType> {
    state: {
        currentValues: {
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
    };
    constructor(props: PropsType);
    onDeleteButtonClick: () => void;
    onSaveButtonClick: () => void;
    onFormChange: (value: string | string[] | ItemType[] | {
        id: string;
        level: string;
        text: string;
    }[], key: "name" | "content" | "subject" | "classLevel" | "numberOfWeeks" | "unitsPerPeek" | "subjectUnits" | "examinations" | "competences") => void;
    getTextFieldTableCaptions: (numberOfWeeks: string, unitsPerPeek: string) => string[];
    render(): JSX.Element;
}
export {};
