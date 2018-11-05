"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAY = 1000 * 60 * 60 * 24;
function filterRelevantElementData(utcStartDate, utcEndDate, elements) {
    return elements.filter(function (element) {
        return (element.utcStartDate < utcStartDate &&
            element.utcEndDate > utcStartDate) ||
            (element.utcStartDate >= utcStartDate &&
                element.utcStartDate < utcEndDate);
    });
}
exports.filterRelevantElementData = filterRelevantElementData;
exports.getWeekPeriodForDate = function (date, numberOfWeeks) {
    var nonUtcDate = new Date(date);
    var utcDate = new Date(Date.UTC(nonUtcDate.getUTCFullYear(), nonUtcDate.getUTCMonth(), nonUtcDate.getUTCDate()));
    var periodStart = utcDate.getUTCDay() === 0
        ? utcDate.getTime() - 6 * DAY
        : utcDate.getTime() - (utcDate.getUTCDay() - 1) * DAY;
    var periodEnd = periodStart + (7 * numberOfWeeks - 1) * DAY;
    return { utcStartDate: periodStart, utcEndDate: periodEnd };
};
exports.getFilteredClassTopicsData = function (classTopics, _a) {
    var utcStartDate = _a.utcStartDate, utcEndDate = _a.utcEndDate;
    return classTopics.map(function (classTopic) { return (__assign({}, classTopic, { classes: classTopic.classes.map(function (singleClass) { return (__assign({}, singleClass, { topics: filterRelevantElementData(utcStartDate, utcEndDate, singleClass.topics) })); }) })); });
};
//# sourceMappingURL=calendarHelper.js.map