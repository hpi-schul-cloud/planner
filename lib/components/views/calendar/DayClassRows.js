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
import { TimeRasterWrapper, generateDayLabelMap } from '../../plannerBase';
import StylesProvider from '../../provider/generalStylesProvider';
import LabelOverlays from './LabelOverlays';
import { getDayAndMonthString, getDayDifference, getDayCount } from './timeHelper';
import { determineIndices, getEventMaps } from './dayClassRowsHelper';
import RasterRow from './RasterRow';
var RasterRowContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n"], ["\n  padding-top: ",
    ";\n  padding-bottom: ",
    ";\n"])), function (_a) {
    var isFirstRow = _a.isFirstRow, isFirstRowOfClass = _a.isFirstRowOfClass;
    return isFirstRow ? '21px' : isFirstRowOfClass ? '37px' : '14px';
}, function (_a) {
    var isLastRow = _a.isLastRow;
    return isLastRow ? '21px' : '0px';
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
        _this.transformToIndexTopics = function (topics, eventsMap) {
            var result = [];
            topics.forEach(function (topic) {
                var utcStartDate = topic.utcStartDate, utcEndDate = topic.utcEndDate, otherProps = __rest(topic, ["utcStartDate", "utcEndDate"]);
                var topicUtcStartDate = new Date(topic.utcStartDate);
                var rowUtcStartDate = new Date(_this.props.rowPeriod.utcStartDate);
                var indices = determineIndices({
                    topicStartDate: topicUtcStartDate,
                    topicEndDate: new Date(topic.utcEndDate),
                    rowStartDate: rowUtcStartDate,
                    rowEndDate: new Date(_this.props.rowPeriod.utcEndDate),
                    eventsMap: eventsMap
                });
                if (indices) {
                    result.push(__assign({}, otherProps, indices));
                }
            });
            return result;
        };
        _this.getClassRows = function (classTopicsData, rasterCount, eventsMap) {
            var result = [];
            classTopicsData.forEach(function (classData, classIndex) {
                classData.classes.forEach(function (subject, index) {
                    var isFirstRow = classIndex === 0 && index === 0;
                    var isFirstRowOfClass = index === 0;
                    var isLastRow = classIndex === classTopicsData.length - 1 &&
                        index === classData.classes.length - 1;
                    var transformedTopicElements = _this.transformToIndexTopics(subject.topics, eventsMap);
                    result.push(React.createElement(RasterRowContainer, { isFirstRow: isFirstRow, isFirstRowOfClass: isFirstRowOfClass, isLastRow: isLastRow, key: classData.className + "-" + subject.subjectId },
                        React.createElement(RasterRow, { topicElements: transformedTopicElements, rasterSize: _this.props.rasterSize, rasterCount: rasterCount, topicElementSize: 'large', onTopicInstanceClick: _this.props.onTopicInstanceClick })));
                });
            });
            return result;
        };
        return _this;
    }
    ClassRows.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.rowPeriod, utcStartDate = _b.utcStartDate, utcEndDate = _b.utcEndDate, rasterSize = _a.rasterSize, utcToday = _a.utcToday, classTopicsData = _a.classTopicsData, holidaysData = _a.holidaysData, otherEventsData = _a.otherEventsData;
        var utcStartDateString = getDayAndMonthString(new Date(utcStartDate));
        var utcEndDateString = getDayAndMonthString(new Date(utcEndDate));
        var rasterCount = getDayCount(this.props.rowPeriod.utcStartDate, this.props.rowPeriod.utcEndDate);
        var _c = getEventMaps(holidaysData, otherEventsData, this.props.rowPeriod), columnColorMap = _c.columnColorMap, eventTypeMap = _c.eventTypeMap, eventArray = _c.eventArray;
        var topLabelMap = generateDayLabelMap(utcStartDate, utcEndDate);
        var rows = this.getClassRows(classTopicsData, rasterCount, eventTypeMap);
        var todayLineIndex = utcToday - utcStartDate > 0
            ? getDayDifference(new Date(utcToday), new Date(utcStartDate))
            : 0;
        return (React.createElement(TimeRasterWrapper, { rasterCount: rasterCount, rasterSize: rasterSize, columnColorMap: columnColorMap, topLabelsMap: topLabelMap, className: className, todayLineIndex: todayLineIndex, topChildren: React.createElement(StyledFlexContainer, null,
                React.createElement(StyledFlexChild, { styles: StylesProvider.styles }, utcStartDateString),
                React.createElement(StyledFlexChild, { styles: StylesProvider.styles }, utcEndDateString)) },
            React.createElement(React.Fragment, null,
                rows,
                React.createElement(LabelOverlays, { rasterCount: rasterCount, rasterSize: rasterSize, labelArray: eventArray }))));
    };
    return ClassRows;
}(Component));
export default ClassRows;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=DayClassRows.js.map