import { TopicIndexType } from '../../types';
export declare type AllClassInstancesType<TopicType> = {
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
                        classes: ClassInstanceType<TopicType>;
                    };
                };
            };
        };
    };
};
export declare type ClassInstanceType<TopicType> = {
    [classId: string]: {
        id: string;
        name: string;
        topics: TopicType[];
    };
};
export declare type LocalTopicIndexType = TopicIndexType & {
    isLocal?: boolean;
    parentTemplateId?: string;
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
