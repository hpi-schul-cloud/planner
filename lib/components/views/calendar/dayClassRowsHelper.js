"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeHelper_1 = require("./timeHelper");
var DAY = 1000 * 60 * 60 * 24;
var determineEndIndex = function (_a) {
    var topicEndDate = _a.topicEndDate, rowStartDate = _a.rowStartDate, rowEndDate = _a.rowEndDate, rowDayCount = _a.rowDayCount, eventsMap = _a.eventsMap;
    if (timeHelper_1.dayIsGreaterThan(topicEndDate, rowEndDate)) {
        var checkIndex = rowDayCount - 1;
        var foundBreak = false;
        for (var i = checkIndex; checkIndex >= 0; i--) {
            if (eventsMap[i]) {
                if (foundBreak)
                    checkIndex = i - 1;
                if (eventsMap[i].includes('WEEKEND'))
                    continue;
                if (eventsMap[i].includes('HOLIDAY') ||
                    eventsMap[i].includes('OTHER')) {
                    checkIndex = i - 1;
                    foundBreak = true;
                    continue;
                }
            }
            else {
                return checkIndex;
            }
        }
        return null;
    }
    else {
        var initialEndIndex = timeHelper_1.getDayDifference(rowStartDate, topicEndDate);
        for (var i = initialEndIndex; i >= 0; i--) {
            if (eventsMap[i])
                continue;
            else
                return i;
        }
        return null;
    }
};
var determineStartIndex = function (_a) {
    var topicStartDate = _a.topicStartDate, rowStartDate = _a.rowStartDate, rowDayCount = _a.rowDayCount, eventsMap = _a.eventsMap;
    var initialIndex = rowStartDate.getTime() <= topicStartDate.getTime()
        ? timeHelper_1.getDayDifference(rowStartDate, topicStartDate)
        : 0;
    for (var i = initialIndex; i < rowDayCount; i++) {
        if (eventsMap[i])
            continue;
        else
            return i;
    }
    return null;
};
exports.determineIndices = function (_a) {
    var topicStartDate = _a.topicStartDate, topicEndDate = _a.topicEndDate, rowStartDate = _a.rowStartDate, rowEndDate = _a.rowEndDate, eventsMap = _a.eventsMap;
    var rowDayCount = timeHelper_1.getDayCount(rowStartDate.getTime(), rowEndDate.getTime());
    var startIndex = determineStartIndex({
        topicStartDate: topicStartDate,
        rowStartDate: rowStartDate,
        rowDayCount: rowDayCount,
        eventsMap: eventsMap
    });
    var endIndex = determineEndIndex({
        topicEndDate: topicEndDate,
        rowStartDate: rowStartDate,
        rowEndDate: rowEndDate,
        rowDayCount: rowDayCount,
        eventsMap: eventsMap
    });
    if (startIndex === null || endIndex === null)
        return null;
    return {
        startIndex: startIndex,
        endIndex: endIndex
    };
};
var addItemToEventTypeMap = function (item, map, index) {
    if (map[index]) {
        map[index].push(item);
    }
    else {
        map[index] = [item];
    }
};
var buildEventArray = function (eventIndexMap, deltaDays) {
    var result = [];
    var startIndex = 0;
    var endIndex = 0;
    var currentValue = null;
    for (var i = 0; i < deltaDays; i++) {
        if (eventIndexMap[i]) {
            if (currentValue) {
                if (currentValue === eventIndexMap[i]) {
                    endIndex = i;
                }
                else {
                    result.push({
                        startIndex: startIndex,
                        endIndex: endIndex,
                        name: currentValue
                    });
                    startIndex = i;
                    endIndex = i;
                    currentValue = eventIndexMap[i];
                }
            }
            else {
                startIndex = i;
                endIndex = i;
                currentValue = eventIndexMap[i];
            }
        }
        else if (currentValue) {
            result.push({
                startIndex: startIndex,
                endIndex: endIndex,
                name: currentValue
            });
            startIndex = 0;
            endIndex = 0;
            currentValue = null;
        }
    }
    if (currentValue) {
        result.push({
            startIndex: startIndex,
            endIndex: endIndex,
            name: currentValue
        });
    }
    return result;
};
exports.getEventMaps = function (holidayEvents, otherEvents, rowPeriod) {
    var columnColorMap = {};
    var eventTypeMap = {};
    var eventIndexMap = {};
    var utcStartDate = new Date(rowPeriod.utcStartDate);
    var deltaDays = timeHelper_1.getDayCount(rowPeriod.utcStartDate, rowPeriod.utcEndDate);
    var setupMapsForEvents = function (events, columnColorMap, eventTypeMap, type) {
        events.forEach(function (event) {
            var startIndex = utcStartDate.getTime() >= event.utcStartDate
                ? 0
                : timeHelper_1.getDayDifference(utcStartDate, new Date(event.utcStartDate));
            var endIndex = timeHelper_1.getDayDifference(utcStartDate, new Date(event.utcEndDate));
            for (var i = startIndex; i <= endIndex && i < deltaDays; i++) {
                columnColorMap[i] = event.color || 'none';
                eventIndexMap[i] = event.name;
                addItemToEventTypeMap(type, eventTypeMap, i);
            }
        });
    };
    setupMapsForEvents(holidayEvents, columnColorMap, eventTypeMap, 'HOLIDAY');
    setupMapsForEvents(otherEvents, columnColorMap, eventTypeMap, 'OTHER');
    for (var i = 0; i < deltaDays; i++) {
        var currentDay = new Date(utcStartDate.getTime() + i * DAY);
        var day = currentDay.getUTCDay();
        if (day === 0 || day === 6) {
            columnColorMap[i] = '#DFDFDF';
            delete eventIndexMap[i];
            addItemToEventTypeMap('WEEKEND', eventTypeMap, i);
        }
    }
    var eventArray = buildEventArray(eventIndexMap, deltaDays);
    return {
        columnColorMap: columnColorMap,
        eventTypeMap: eventTypeMap,
        eventArray: eventArray
    };
};
//# sourceMappingURL=dayClassRowsHelper.js.map