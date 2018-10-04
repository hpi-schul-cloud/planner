import { MONTHS_MAP } from '../constants';
import { EventType } from '../types';
import { getWeekDifference } from '../calendarView/timeHelper';

const DAY = 1000 * 60 * 60 * 24;
const WEEK = 1000 * 60 * 60 * 24 * 7;

export const generateDayLabelMap = (
  utcStartDate: number,
  utcEndDate: number
) => {
  const indexMap = {};
  for (let i = 0; utcStartDate + i * DAY <= utcEndDate; i++) {
    const currentDate = new Date(utcStartDate + i * DAY);
    indexMap[i] = `${`${currentDate.getUTCDate()}`.padStart(
      2,
      '0'
    )}.${`${currentDate.getUTCMonth() + 1}`.padStart(2, '0')}.`;
  }

  return indexMap;
};

export const generateMonthLabelMap = (
  utcStartDate: number,
  utcEndDate: number
) => {
  const indexMap = {};
  let currentMonth = new Date(utcStartDate).getUTCMonth();

  for (let i = 0; utcStartDate + i * WEEK <= utcEndDate; i++) {
    const currentDate = new Date(utcStartDate + i * WEEK);
    if (currentDate.getUTCMonth() !== currentMonth) {
      currentMonth = currentDate.getUTCMonth();
      indexMap[i] = MONTHS_MAP[currentMonth].slice(0, 3);
    }
  }

  return indexMap;
};

export const generateWeeklyColorMap = (
  events: EventType,
  utcStartDate: number
) => {
  const columnColorMap = {};
  const rowPeriodStartDate = new Date(utcStartDate);
  events.forEach(event => {
    const startIndex =
      rowPeriodStartDate.getTime() >= event.utcStartDate
        ? 0
        : getWeekDifference(
            rowPeriodStartDate,
            new Date(event.utcStartDate),
            true
          );
    const endIndex = getWeekDifference(
      rowPeriodStartDate,
      new Date(event.utcEndDate),
      false
    );
    for (let i = startIndex; i <= endIndex; i++) {
      columnColorMap[i] = event.color;
    }
  });
  return columnColorMap;
};
