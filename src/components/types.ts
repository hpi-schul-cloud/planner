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
    topics: TopicDateType[];
  };
};

/* Topics can be 
    (1) in raw form (with dates) 
    (2) in parsed form with indices
*/
type TopicType = {
  id: string;
  text: string;
  color: string;
};

export type TopicIndexType = TopicType & {
  startIndex: number;
  endIndex: number;
};

export type TopicDateType = TopicType & {
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

export type SchoolYearType = {
  utcStartDate: number; // first day of school
  utcEndDate: number; // last day of school
};
