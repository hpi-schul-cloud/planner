export declare type AllClassInstancesType = {
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
export declare type ClassInstanceType = {
    [classId: string]: {
        id: string;
        name: string;
        topics: TopicDateType[];
    };
};
declare type TopicType = {
    id: string;
    text: string;
    color: string;
};
export declare type TopicIndexType = TopicType & {
    startIndex: number;
    endIndex: number;
};
export declare type TopicDateType = TopicType & {
    utcStartDate: number;
    utcEndDate: number;
};
export declare type EventType = {
    name: string;
    color?: string;
    utcStartDate: number;
    utcEndDate: number;
}[];
export declare type SchoolYearType = {
    utcStartDate: number;
    utcEndDate: number;
};
export {};
