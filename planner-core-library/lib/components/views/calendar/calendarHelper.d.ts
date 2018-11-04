export declare function filterRelevantElementData<K extends {
    utcStartDate: number;
    utcEndDate: number;
}>(utcStartDate: number, utcEndDate: number, elements: K[]): K[];
export declare const getWeekPeriodForDate: (date: number, numberOfWeeks: number) => {
    utcStartDate: number;
    utcEndDate: number;
};
export declare const getFilteredClassTopicsData: (classTopics: {
    className: string;
    classes: {
        subjectId: string;
        subjectName: string;
        topics: import("../../types").TopicDateType[];
    }[];
}[], { utcStartDate, utcEndDate }: {
    utcStartDate: number;
    utcEndDate: number;
}) => {
    classes: {
        topics: import("../../types").TopicDateType[];
        subjectId: string;
        subjectName: string;
    }[];
    className: string;
}[];
