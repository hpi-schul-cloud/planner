import { Component } from 'react';
import { AllClassInstancesType, AllTopicTemplatesType, ClassInstanceType, TemplatesOfClassLevelType, LocalTopicIndexType } from './types';
import { EventType, SchoolYearType, TopicIndexType } from '../../types';
interface PropsType {
    allClassTopics: AllClassInstancesType<TopicIndexType>;
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
    onSaveClassInstances: (instances: AllClassInstancesType<LocalTopicIndexType>) => void;
}
interface StateType {
    selectedSchoolYearId: string;
    selectedSubjectId: string;
    localAllClassTopics: AllClassInstancesType<LocalTopicIndexType>;
    prevClassTopics: AllClassInstancesType<TopicIndexType>;
}
declare class ClassConfigurationView extends Component<PropsType, StateType> {
    constructor(props: PropsType);
    static getDerivedStateFromProps(props: PropsType, state: StateType): {
        selectedSchoolYearId: string;
        selectedSubjectId: string;
        localAllClassTopics: AllClassInstancesType<TopicIndexType>;
        prevClassTopics: AllClassInstancesType<TopicIndexType>;
    } | null;
    getCurrentTopicInstancesAndTemplates: () => {
        instances: {
            [classLevelId: string]: {
                classLevelId: string;
                classLevelName: string;
                classes: ClassInstanceType<LocalTopicIndexType>;
            };
        };
        templates: TemplatesOfClassLevelType;
    };
    updateLocalClassTopicsForYear: (classLevelId: string, newClasses: ClassInstanceType<LocalTopicIndexType>) => void;
    getRadioItems: () => {
        id: string;
        text: string;
        color: any;
    }[];
    getSelectOptions: () => {
        id: string;
        text: string;
    }[];
    getRelevantEventData: ((eventData: {
        name: string;
        color?: string | undefined;
        utcStartDate: number;
        utcEndDate: number;
    }[], schoolYear: SchoolYearType) => {
        name: string;
        color?: string | undefined;
        utcStartDate: number;
        utcEndDate: number;
    }[]) & import("lodash").MemoizedFunction;
    generateRasterUnits: (instancesAndTemplates: {
        instances: {
            [classLevelId: string]: {
                classLevelId: string;
                classLevelName: string;
                classes: ClassInstanceType<LocalTopicIndexType>;
            };
        };
        templates: TemplatesOfClassLevelType;
    }) => JSX.Element | JSX.Element[];
    onSelectChange: (selectedSchoolYearId: string) => void;
    onRadioButtonChange: (id: string) => void;
    onAddTemplateClick: (classLevelId: string) => void;
    onSaveButtonClick: () => void;
    render(): JSX.Element;
}
export default ClassConfigurationView;
