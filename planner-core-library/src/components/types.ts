export type AllClassInstancesType = {
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
  utcStartDate: number;
  utcEndDate: number;
};

// Data type for events
export type EventType = {
  name: string;
  color?: string;
  utcStartDate: number;
  utcEndDate: number;
}[];
