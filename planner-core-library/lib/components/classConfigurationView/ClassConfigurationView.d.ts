import { Component } from 'react';
import { AllClassInstancesType, AllTopicTemplatesType, ClassInstanceType, TemplatesOfClassLevelType } from './types';
import { EventType, SchoolYearType } from '../types';
interface PropsType {
    allClassTopics: AllClassInstancesType;
    allTopicTemplates: AllTopicTemplatesType;
    initialSchoolYearId?: string;
    schoolYearData: {
        [schoolYearId: string]: SchoolYearType;
    };
    eventData: EventType;
    onAddTemplate: (selectedSubjectId: string, classLevelId: string) => void;
    onEditTemplate: (templateId: string) => void;
    onDeleteTemplate: (templateId: string) => void;
    onEditInstance: (instanceId: string) => void;
    onSaveClassInstances: (instances: AllClassInstancesType) => void;
}
interface StateType {
    selectedSchoolYearId: string;
    selectedSubjectId: string;
    localAllClassTopics: AllClassInstancesType;
}
declare class ClassConfigurationView extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    getCurrentTopicInstancesAndTemplates: () => {
        instances: {
            [classLevelId: string]: {
                classLevelId: string;
                classLevelName: string;
                classes: ClassInstanceType;
            };
        };
        templates: TemplatesOfClassLevelType;
    };
    updateLocalClassTopicsForYear: (classLevelId: string, newClasses: ClassInstanceType) => void;
    getRadioItems: () => {
        id: string;
        text: string;
        color: any;
    }[];
    getSelectOptions: () => {
        value: string;
        text: string;
    }[];
    generateRasterUnits: (instancesAndTemplates: {
        instances: {
            [classLevelId: string]: {
                classLevelId: string;
                classLevelName: string;
                classes: ClassInstanceType;
            };
        };
        templates: TemplatesOfClassLevelType;
    }) => JSX.Element | JSX.Element[];
    onSelectChange: (id: string) => void;
    onRadioButtonChange: (id: string) => void;
    onSaveButtonClick: () => void;
    render(): JSX.Element;
}
export default ClassConfigurationView;
