import { TopicDateType } from '../../types';
export declare type ClassTopicsDataType = {
    className: string;
    classes: {
        subjectId: string;
        subjectName: string;
        topics: TopicDateType[];
    }[];
}[];
