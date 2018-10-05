import { TopicDateType } from '../types';

export type ClassTopicsDataType = {
  className: string;
  classes: {
    subjectId: string;
    subjectName: string;
    topics: TopicDateType[];
  }[];
}[];
