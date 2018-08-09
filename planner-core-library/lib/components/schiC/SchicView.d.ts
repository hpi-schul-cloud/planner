import { Component } from "react";
import { ViewStylesType } from "../stylesType";
import { ComponentStylesType } from "./stylesType";
import { ItemType } from "./SelectorInput";
declare type FormValuesType = {
    topic: string;
    shortDescription: string;
    numberOfLessons: string;
    competences: string;
    content: string;
    mediaEducation: ItemType[];
    languageEducation: ItemType[];
    interdisciplinaryEducation: ItemType[];
};
declare type FormFieldType = "topic" | "shortDescription" | "numberOfLessons" | "competences" | "content" | "mediaEducation" | "languageEducation" | "interdisciplinaryEducation";
export interface PropsType {
    onSave: (values: FormValuesType) => void;
    initialValues?: FormValuesType;
    styles: ViewStylesType<ComponentStylesType>;
}
interface StateType {
    values: FormValuesType;
}
export default class SchicView extends Component<PropsType, StateType> {
    state: {
        values: {
            topic: string;
            shortDescription: string;
            numberOfLessons: string;
            competences: string;
            content: string;
            mediaEducation: never[];
            languageEducation: never[];
            interdisciplinaryEducation: never[];
        };
    };
    constructor(props: PropsType);
    onSaveButtonClick: () => void;
    onFormChange: (value: string | ItemType[], key: FormFieldType) => void;
    render(): JSX.Element;
}
export {};
