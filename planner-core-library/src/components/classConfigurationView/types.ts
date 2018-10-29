import { TopicIndexType } from '../types';

/* Topic Instances */
// Includes all school years, with their respective subjects
// and their respective class levels and their actual classes
export type AllClassInstancesType = {
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

export type ClassInstanceType = {
  [classId: string]: {
    id: string;
    name: string;
    topics: TopicIndexType[];
  };
};

/* Topic Templates */
export type AllTopicTemplatesType = {
  [subjectId: string]: TemplatesOfClassLevelType;
};

export type TemplatesOfClassLevelType = {
  [classLevelId: string]: TopicTemplateType[];
};

export interface TopicTemplateType {
  id: string;
  text: string;
  width: number;
  color: string;
}
