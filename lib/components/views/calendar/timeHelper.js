import { MONTHS_MAP } from '../../constants';
var DAY = 1000 * 60 * 60 * 24;
export function getDayDifference(first, second) {
    return Math.floor(Math.abs(first.getTime() - second.getTime()) / DAY);
}
export function getWeekDifference(first, second, countIncompleteWeekAsOneWeek) {
    if (countIncompleteWeekAsOneWeek === void 0) { countIncompleteWeekAsOneWeek = true; }
    var dayDifference = getDayDifference(first, second);
    var numberOfFullWeeks = Math.floor(dayDifference / 7);
    if (countIncompleteWeekAsOneWeek) {
        return dayDifference % 7 !== 0 ? numberOfFullWeeks + 1 : numberOfFullWeeks;
    }
    else {
        return numberOfFullWeeks;
    }
}
export function getMonthAndYearString(date) {
    var monthString = MONTHS_MAP[date.getUTCMonth()];
    var yearString = date.getUTCFullYear().toString();
    return monthString + " " + yearString;
}
export function getDayAndMonthString(date) {
    var dayString = date.getUTCDate().toString();
    var monthString = MONTHS_MAP[date.getUTCMonth()];
    return dayString + ". " + monthString;
}
export function dayIsSmallerOrEquals(date1, date2) {
    return (date1.getUTCFullYear() < date2.getUTCFullYear() ||
        (date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() < date2.getUTCMonth()) ||
        (date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() <= date2.getUTCDate()));
}
export function dayIsGreaterThan(date1, date2) {
    return (date1.getUTCFullYear() > date2.getUTCFullYear() ||
        (date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() > date2.getUTCMonth()) ||
        (date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() > date2.getUTCDate()));
}
export var getDayCount = function (utcStartDate, utcEndDate) {
    return getDayDifference(new Date(utcStartDate), new Date(utcEndDate)) + 1;
};
//# sourceMappingURL=timeHelper.js.map