/* Topic Instances */
// Includes all school years, with their respective subjects
// and their respective class levels and their actual classes
export type AllClassInstancesType = {
  [schoolYear: string]: {
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
    topics: TopicElementsType[];
  };
};

export type TopicElementsType = {
  id: string;
  text: string;
  color: string;
  startIndex: number;
  endIndex: number;
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
