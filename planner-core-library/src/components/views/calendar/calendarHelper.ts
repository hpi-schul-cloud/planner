import { ClassTopicsDataType } from './types';
const DAY = 1000 * 60 * 60 * 24;

export function filterRelevantElementData<
  K extends { utcStartDate: number; utcEndDate: number }
>(utcStartDate: number, utcEndDate: number, elements: K[]) {
  return elements.filter(
    element =>
      (element.utcStartDate < utcStartDate &&
        element.utcEndDate > utcStartDate) ||
      (element.utcStartDate >= utcStartDate &&
        element.utcStartDate < utcEndDate)
  );
}

export const getWeekPeriodForDate = (date: number, numberOfWeeks: number) => {
  const nonUtcDate = new Date(date);
  const utcDate = new Date(
    Date.UTC(
      nonUtcDate.getUTCFullYear(),
      nonUtcDate.getUTCMonth(),
      nonUtcDate.getUTCDate()
    )
  );
  const periodStart =
    utcDate.getUTCDay() === 0
      ? utcDate.getTime() - 6 * DAY
      : utcDate.getTime() - (utcDate.getUTCDay() - 1) * DAY;
  const periodEnd = periodStart + (7 * numberOfWeeks - 1) * DAY;
  return { utcStartDate: periodStart, utcEndDate: periodEnd };
};

export const getFilteredClassTopicsData = (
  classTopics: ClassTopicsDataType,
  {
    utcStartDate,
    utcEndDate
  }: {
    utcStartDate: number;
    utcEndDate: number;
  }
) => {
  return classTopics.map(classTopic => ({
    ...classTopic,
    classes: classTopic.classes.map(singleClass => ({
      ...singleClass,
      topics: filterRelevantElementData(
        utcStartDate,
        utcEndDate,
        singleClass.topics
      )
    }))
  }));
};
