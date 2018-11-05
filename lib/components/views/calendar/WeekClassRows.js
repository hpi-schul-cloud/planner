var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import styled from 'styled-components';
import { TimeRasterWrapper, generateMonthLabelMap, generateWeeklyColorMap } from '../../plannerBase';
import StylesProvider from '../../provider/generalStylesProvider';
import { getMonthAndYearString, getWeekDifference, getDayDifference } from './timeHelper';
import RasterRow from './RasterRow';
var RasterRowContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n"], ["\n  padding-top: ",
    ";\n  padding-bottom: ",
    ";\n"])), function (_a) {
    var isFirstRow = _a.isFirstRow, isFirstRowOfClass = _a.isFirstRowOfClass;
    return isFirstRow ? '26px' : isFirstRowOfClass ? '46px' : '20px';
}, function (_a) {
    var isLastRow = _a.isLastRow;
    return isLastRow ? '26px' : '0px';
});
var StyledFlexContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"])));
var StyledFlexChild = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n"], ["\n  display: inline-block;\n  font-family: ",
    ";\n  font-size: 14px;\n  color: ",
    ";\n"])), function (_a) {
    var styles = _a.styles;
    return styles['font-family'];
}, function (_a) {
    var styles = _a.styles;
    return styles.defaultTextColor;
});
var ClassRows = (function (_super) {
    __extends(ClassRows, _super);
    function ClassRows() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getEventLabels = function (events) {
            var labelMap = {};
            var rowPeriodStartDate = new Date(_this.props.rowPeriod.utcStartDate);
            events.forEach(function (event) {
                var endIndex = getWeekDifference(rowPeriodStartDate, new Date(event.utcEndDate), false);
                labelMap[endIndex] = event.name;
            });
            return labelMap;
        };
        _this.transformToIndexTopics = function (topics) {
            return topics.map(function (topic) {
                var utcStartDate = topic.utcStartDate, utcEndDate = topic.utcEndDate, otherProps = __rest(topic, ["utcStartDate", "utcEndDate"]);
                var rowPeriodStartDate = new Date(_this.props.rowPeriod.utcStartDate);
                var rowPeriodEndDate = new Date(_this.props.rowPeriod.utcEndDate);
                var startIndex = getWeekDifference(rowPeriodStartDate, topic.utcStartDate < rowPeriodStartDate.getTime()
                    ? rowPeriodStartDate
                    : new Date(topic.utcStartDate), false);
                var endIndex = getWeekDifference(rowPeriodStartDate, topic.utcEndDate > rowPeriodEndDate.getTime()
                    ? rowPeriodEndDate
                    : new Date(topic.utcEndDate), false);
                return __assign({}, otherProps, { startIndex: startIndex,
                    endIndex: endIndex });
            });
        };
        _this.getClassRows = function (classTopicsData, rasterCount) {
            var result = [];
            classTopicsData.forEach(function (classData, classIndex) {
                classData.classes.forEach(function (subject, index) {
                    var isFirstRow = classIndex === 0 && index === 0;
                    var isFirstRowOfClass = index === 0;
                    var isLastRow = classIndex === classTopicsData.length - 1 &&
                        index === classData.classes.length - 1;
                    var transformedTopicElements = _this.transformToIndexTopics(subject.topics);
                    result.push(React.createElement(RasterRowContainer, { isFirstRow: isFirstRow, isFirstRowOfClass: isFirstRowOfClass, isLastRow: isLastRow, key: classData.className + "-" + subject.subjectId },
                        React.createElement(RasterRow, { topicElements: transformedTopicElements, rasterSize: _this.props.rasterSize, rasterCount: rasterCount, onTopicInstanceClick: _this.props.onTopicInstanceClick })));
                });
            });
            return result;
        };
        return _this;
    }
    ClassRows.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.rowPeriod, utcStartDate = _b.utcStartDate, utcEndDate = _b.utcEndDate, rasterSize = _a.rasterSize, utcToday = _a.utcToday, classTopicsData = _a.classTopicsData, holidaysData = _a.holidaysData, otherEventsData = _a.otherEventsData;
        var utcStartDateString = getMonthAndYearString(new Date(utcStartDate));
        var utcEndDateString = getMonthAndYearString(new Date(utcEndDate));
        var rasterCount = getWeekDifference(new Date(utcStartDate), new Date(utcEndDate));
        var rows = this.getClassRows(classTopicsData, rasterCount);
        var columnColorMap = generateWeeklyColorMap(holidaysData.concat(otherEventsData), this.props.rowPeriod.utcStartDate);
        var topLabelMap = generateMonthLabelMap(utcStartDate, utcEndDate);
        var bottomLabelsMap = this.getEventLabels(otherEventsData);
        var todayLineIndex = utcToday - utcStartDate >= 0
            ? Math.floor(getDayDifference(new Date(utcToday), new Date(utcStartDate)) / 7)
            : -1;
        return (React.createElement(TimeRasterWrapper, { rasterCount: rasterCount, rasterSize: rasterSize, columnColorMap: columnColorMap, topLabelsMap: topLabelMap, bottomLabelsMap: bottomLabelsMap, className: className, todayLineIndex: todayLineIndex, topChildren: React.createElement(StyledFlexContainer, null,
                React.createElement(StyledFlexChild, { styles: StylesProvider.styles }, utcStartDateString),
                React.createElement(StyledFlexChild, { styles: StylesProvider.styles }, utcEndDateString)) }, rows));
    };
    return ClassRows;
}(Component));
export default ClassRows;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=WeekClassRows.js.map