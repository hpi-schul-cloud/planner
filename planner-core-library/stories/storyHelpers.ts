import {
  AllClassInstancesType,
  AllTopicTemplatesType
} from '../src/components/planner/types';

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
