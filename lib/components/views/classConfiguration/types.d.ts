import { TopicIndexType } from '../../types';
export declare type AllClassInstancesType = {
    [schoolYearId: string]: {
        schoolYearId: string;
        schoolYearName: string;
        subjects: {
            [subjecId: string]: {
                subjectId: string;
                subjectName: string;
                classLevels: {
                    [classLevelId: string]: {
                        classLevelId: string;
                        classLevelName: string;
                        classes: ClassInstanceType;
                    };
                };
            };
        };
    };
};
export declare type ClassInstanceType = {
    [classId: string]: {
        id: string;
        name: string;
        topics: TopicIndexType[];
    };
};
export declare type AllTopicTemplatesType = {
    [subjectId: string]: TemplatesOfClassLevelType;
};
export declare type TemplatesOfClassLevelType = {
    [classLevelId: string]: TopicTemplateType[];
};
export interface TopicTemplateType {
    id: string;
    text: string;
    width: number;
    color: string;
}
