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
import React, { Component } from 'react';
import styled from 'styled-components';
import RowCaptions from './RowCaptions';
import WeekClassRows from './WeekClassRows';
import { filterRelevantElementData, getFilteredClassTopicsData, getWeekPeriodForDate } from './calendarHelper';
var StyledFlexContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n  }\n"], ["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n  }\n"])));
var StyledRowCaptions = styled(RowCaptions)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-top: 47px;\n"], ["\n  padding-top: 47px;\n"])));
var ThreeMonthCalendar = (function (_super) {
    __extends(ThreeMonthCalendar, _super);
    function ThreeMonthCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeMonthCalendar.prototype.render = function () {
        var _a = this.props, utcToday = _a.utcToday, rasterSize = _a.rasterSize, classTopicsData = _a.classTopicsData, holidaysData = _a.holidaysData, otherEventsData = _a.otherEventsData, onTopicInstanceClick = _a.onTopicInstanceClick;
        var threeMonthTimePeriod = getWeekPeriodForDate(utcToday, 12);
        var labels = classTopicsData.map(function (classTopic) { return ({
            topLabel: classTopic.className,
            subLabels: classTopic.classes.map(function (classTopic) { return classTopic.subjectName; })
        }); });
        var filteredHolidaysData = filterRelevantElementData(threeMonthTimePeriod.utcStartDate, threeMonthTimePeriod.utcEndDate, holidaysData);
        var filteredOtherEventsData = filterRelevantElementData(threeMonthTimePeriod.utcStartDate, threeMonthTimePeriod.utcEndDate, otherEventsData);
        var filteredClassTopicsData = getFilteredClassTopicsData(classTopicsData, threeMonthTimePeriod);
        return (React.createElement(StyledFlexContainer, null,
            React.createElement(StyledRowCaptions, { labels: labels }),
            React.createElement(WeekClassRows, { rasterSize: rasterSize, rowPeriod: threeMonthTimePeriod, utcToday: utcToday, classTopicsData: filteredClassTopicsData, holidaysData: filteredHolidaysData, otherEventsData: filteredOtherEventsData, onTopicInstanceClick: onTopicInstanceClick })));
    };
    ThreeMonthCalendar.defaultProps = {
        rasterSize: 15,
        utcToday: 1537308000000,
        holidaysData: [],
        otherEventsData: [],
        onTopicInstanceClick: function () { }
    };
    return ThreeMonthCalendar;
}(Component));
export default ThreeMonthCalendar;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ThreeMonthCalendar.js.map