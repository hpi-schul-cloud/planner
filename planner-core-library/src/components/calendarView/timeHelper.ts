import { MONTHS_MAP } from '../constants';

export function getDayDifference(first: Date, second: Date) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round(
    Math.abs(first.getTime() - second.getTime()) / (1000 * 60 * 60 * 24)
  );
}

export function getWeekDifference(first: Date, second: Date) {
  const dayDifference = getDayDifference(first, second);
  const numberOfFullWeeks = Math.floor(dayDifference / 7);

  return dayDifference % 7 !== 0 ? numberOfFullWeeks + 1 : numberOfFullWeeks;
}

export function getMonthAndYearString(date: Date) {
  const monthString = MONTHS_MAP[date.getMonth()];
  const yearString = date.getFullYear().toString();

  return `${monthString} ${yearString}`;
}
