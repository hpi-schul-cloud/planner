"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var timeHelper_1 = require("../views/calendar/timeHelper");
var DAY = 1000 * 60 * 60 * 24;
var WEEK = 1000 * 60 * 60 * 24 * 7;
exports.generateDayLabelMap = function (utcStartDate, utcEndDate) {
    var indexMap = {};
    for (var i = 0; utcStartDate + i * DAY <= utcEndDate; i++) {
        var currentDate = new Date(utcStartDate + i * DAY);
        indexMap[i] = ("" + currentDate.getUTCDate()).padStart(2, '0') + "." + ("" + (currentDate.getUTCMonth() + 1)).padStart(2, '0') + ".";
    }
    return indexMap;
};
exports.generateMonthLabelMap = function (utcStartDate, utcEndDate) {
    var indexMap = {};
    var currentMonth = new Date(utcStartDate).getUTCMonth();
    for (var i = 0; utcStartDate + i * WEEK <= utcEndDate; i++) {
        var currentDate = new Date(utcStartDate + i * WEEK);
        if (currentDate.getUTCMonth() !== currentMonth) {
            currentMonth = currentDate.getUTCMonth();
            indexMap[i] = constants_1.MONTHS_MAP[currentMonth].slice(0, 3);
        }
    }
    return indexMap;
};
exports.generateWeeklyColorMap = function (events, utcStartDate) {
    var columnColorMap = {};
    var rowPeriodStartDate = new Date(utcStartDate);
    events.forEach(function (event) {
        var startIndex = rowPeriodStartDate.getTime() >= event.utcStartDate
            ? 0
            : timeHelper_1.getWeekDifference(rowPeriodStartDate, new Date(event.utcStartDate), true);
        var endIndex = timeHelper_1.getWeekDifference(rowPeriodStartDate, new Date(event.utcEndDate), false);
        for (var i = startIndex; i <= endIndex; i++) {
            columnColorMap[i] = event.color;
        }
    });
    return columnColorMap;
};
//# sourceMappingURL=timeRasterHelper.js.map