import uniqueId from 'lodash/uniqueId';
import {
  AllClassInstancesType,
  AllTopicTemplatesType
} from '../src/components/classConfigurationView/types';

const getSubjects = () => ({
  biology: {
    subjectId: 'biology',
    subjectName: 'Biologie',
    classLevels: {
      '8': {
        classLevelId: '8',
        classLevelName: 'Jahrgang 8',
        classes: getClassInstances(8)
      },
      '10': {
        classLevelId: '10',
        classLevelName: 'Jahrgang 10',
        classes: getClassInstances(10)
      },
      '11': {
        classLevelId: '11',
        classLevelName: 'Jahrgang 11',
        classes: getClassInstances(11)
      }
    }
  },
  chemistry: {
    subjectId: 'chemistry',
    subjectName: 'Chemie',
    classLevels: {
      '8': {
        classLevelId: '8',
        classLevelName: 'Jahrgang 8',
        classes: getClassInstances(8)
      },
      '9': {
        classLevelId: '9',
        classLevelName: 'Jahrgang 9',
        classes: getClassInstances(9)
      }
    }
  }
});

export const getAllClassInstances = (): AllClassInstancesType => ({
  '17/18': {
    schoolYearId: '17/18',
    schoolYearName: '2017/2018',
    subjects: getSubjects()
  },
  '18/19': {
    schoolYearId: '18/19',
    schoolYearName: '2018/2019',
    subjects: getSubjects()
  }
});

export const getClassInstances = (classLevel: number) => ({
  [`${classLevel}a`]: {
    id: `${classLevel}a`,
    name: `Klasse ${classLevel}a`,
    topics: [
      {
        id: '1',
        text: '1.Topic',
        color: '#92DB92',
        startIndex: 0,
        endIndex: 3
      },
      {
        id: '2',
        text: '2.Topic',
        color: '#92DB92',
        startIndex: 4,
        endIndex: 6
      },
      {
        id: '3',
        text: '3.Topic',
        color: '#92DB92',
        startIndex: 8,
        endIndex: 12
      }
    ]
  },
  [`${classLevel}b`]: {
    id: `${classLevel}b`,
    name: `Klasse ${classLevel}b`,
    topics: [
      {
        id: '1',
        text: '1.Topic',
        color: '#92DB92',
        startIndex: 0,
        endIndex: 3
      },
      {
        id: '2',
        text: '2.Topic',
        color: '#92DB92',
        startIndex: 4,
        endIndex: 6
      },
      {
        id: '3',
        text: '3.Topic',
        color: '#92DB92',
        startIndex: 8,
        endIndex: 12
      }
    ]
  }
});

export const getAllTopicTemplates = (): AllTopicTemplatesType => ({
  biology: {
    '8': getTopicTemplates(),
    '10': getTopicTemplates(),
    '11': getTopicTemplates()
  },
  chemistry: {
    '8': getTopicTemplates(),
    '9': getTopicTemplates()
  }
});

export const getTopicTemplates = () => [
  { id: '4', text: 'Evolution', width: 5, color: '#92DB92' },
  { id: '5', text: 'Replikation', width: 10, color: '#92DB92' },
  { id: '6', text: 'Zellteilung', width: 8, color: '#92DB92' }
];

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
const getTopic = (
  schoolYearStart: number,
  startWeek: number,
  endWeek: number,
  color: string
) => {
  const id = uniqueId('Thema ');
  return {
    id,
    text: id,
    color,
    utcStartDate: schoolYearStart + startWeek * ONE_WEEK,
    utcEndDate: schoolYearStart + endWeek * ONE_WEEK - 1
  };
};
export const getClassTopicsData = (schoolYearStart: number) => [
  {
    className: 'Klasse 8a',
    classes: [
      {
        subjectId: 'biology',
        subjectName: 'Biologie',
        topics: [
          getTopic(schoolYearStart, 0, 2, '#92DB92'),
          getTopic(schoolYearStart, 2, 8, '#92DB92'),
          getTopic(schoolYearStart, 8, 12, '#92DB92')
        ]
      }
    ]
  },
  {
    className: 'Klasse 8b',
    classes: [
      {
        subjectId: 'biology',
        subjectName: 'Biologie',
        topics: [
          getTopic(schoolYearStart, 0, 3, '#92DB92'),
          getTopic(schoolYearStart, 3, 7, '#92DB92'),
          getTopic(schoolYearStart, 7, 13, '#92DB92')
        ]
      },
      {
        subjectId: 'chemistry',
        subjectName: 'Chemie',
        topics: [
          getTopic(schoolYearStart, 0, 1, '#DBC192'),
          getTopic(schoolYearStart, 1, 5, '#DBC192'),
          getTopic(schoolYearStart, 5, 10, '#DBC192')
        ]
      }
    ]
  },
  {
    className: 'Klasse 10a',
    classes: [
      {
        subjectId: 'chemistry',
        subjectName: 'Chemie',
        topics: [
          getTopic(schoolYearStart, 0, 4, '#DBC192'),
          getTopic(schoolYearStart, 4, 6, '#DBC192'),
          getTopic(schoolYearStart, 6, 10, '#DBC192'),
          getTopic(schoolYearStart, 10, 15, '#DBC192')
        ]
      }
    ]
  }
];
