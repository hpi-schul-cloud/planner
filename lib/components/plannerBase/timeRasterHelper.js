import { MONTHS_MAP } from '../constants';
import { getWeekDifference } from '../views/calendar/timeHelper';
var DAY = 1000 * 60 * 60 * 24;
var WEEK = 1000 * 60 * 60 * 24 * 7;
export var generateDayLabelMap = function (utcStartDate, utcEndDate) {
    var indexMap = {};
    for (var i = 0; utcStartDate + i * DAY <= utcEndDate; i++) {
        var currentDate = new Date(utcStartDate + i * DAY);
        indexMap[i] = ("" + currentDate.getUTCDate()).padStart(2, '0') + "." + ("" + (currentDate.getUTCMonth() + 1)).padStart(2, '0') + ".";
    }
    return indexMap;
};
export var generateMonthLabelMap = function (utcStartDate, utcEndDate) {
    var indexMap = {};
    var currentMonth = new Date(utcStartDate).getUTCMonth();
    for (var i = 0; utcStartDate + i * WEEK <= utcEndDate; i++) {
        var currentDate = new Date(utcStartDate + i * WEEK);
        if (currentDate.getUTCMonth() !== currentMonth) {
            currentMonth = currentDate.getUTCMonth();
            indexMap[i] = MONTHS_MAP[currentMonth].slice(0, 3);
        }
    }
    return indexMap;
};
export var generateWeeklyColorMap = function (events, utcStartDate) {
    var columnColorMap = {};
    var rowPeriodStartDate = new Date(utcStartDate);
    events.forEach(function (event) {
        var startIndex = rowPeriodStartDate.getTime() >= event.utcStartDate
            ? 0
            : getWeekDifference(rowPeriodStartDate, new Date(event.utcStartDate), true);
        var endIndex = getWeekDifference(rowPeriodStartDate, new Date(event.utcEndDate), false);
        for (var i = startIndex; i <= endIndex; i++) {
            columnColorMap[i] = event.color;
        }
    });
    return columnColorMap;
};
//# sourceMappingURL=timeRasterHelper.js.map