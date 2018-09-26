import { MONTHS_MAP } from '../constants';

/* All values are expected to be UTC dates ! */
const DAY = 1000 * 60 * 60 * 24;
export function getDayDifference(first: Date, second: Date) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.floor(Math.abs(first.getTime() - second.getTime()) / DAY);
}

export function getWeekDifference(
  first: Date,
  second: Date,
  countIncompleteWeekAsOneWeek: boolean = true
) {
  const dayDifference = getDayDifference(first, second);
  const numberOfFullWeeks = Math.floor(dayDifference / 7);
  if (countIncompleteWeekAsOneWeek) {
    return dayDifference % 7 !== 0 ? numberOfFullWeeks + 1 : numberOfFullWeeks;
  } else {
    return numberOfFullWeeks;
  }
}

export function getMonthAndYearString(date: Date) {
  const monthString = MONTHS_MAP[date.getUTCMonth()];
  const yearString = date.getUTCFullYear().toString();

  return `${monthString} ${yearString}`;
}
