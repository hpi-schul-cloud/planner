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
import DayClassRows from './DayClassRows';
import { filterRelevantElementData, getFilteredClassTopicsData, getWeekPeriodForDate } from './calendarHelper';
var StyledFlexContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n  }\n"], ["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n  }\n"])));
var StyledRowCaptions = styled(RowCaptions)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-top: 47px;\n"], ["\n  padding-top: 47px;\n"])));
var TwoWeekCalendar = (function (_super) {
    __extends(TwoWeekCalendar, _super);
    function TwoWeekCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWeekCalendar.prototype.render = function () {
        var _a = this.props, utcToday = _a.utcToday, rasterSize = _a.rasterSize, classTopicsData = _a.classTopicsData, holidaysData = _a.holidaysData, otherEventsData = _a.otherEventsData, onTopicInstanceClick = _a.onTopicInstanceClick;
        var twoWeekTimePeriod = getWeekPeriodForDate(utcToday, 2);
        var labels = classTopicsData.map(function (classTopic) { return ({
            topLabel: classTopic.className,
            subLabels: classTopic.classes.map(function (classTopic) { return classTopic.subjectName; })
        }); });
        var filteredHolidaysData = filterRelevantElementData(twoWeekTimePeriod.utcStartDate, twoWeekTimePeriod.utcEndDate, holidaysData);
        var filteredOtherEventsData = filterRelevantElementData(twoWeekTimePeriod.utcStartDate, twoWeekTimePeriod.utcEndDate, otherEventsData);
        var filteredClassTopicsData = getFilteredClassTopicsData(classTopicsData, twoWeekTimePeriod);
        return (React.createElement(StyledFlexContainer, null,
            React.createElement(StyledRowCaptions, { labels: labels }),
            React.createElement(DayClassRows, { rasterSize: rasterSize, rowPeriod: twoWeekTimePeriod, utcToday: utcToday, classTopicsData: filteredClassTopicsData, holidaysData: filteredHolidaysData, otherEventsData: filteredOtherEventsData, onTopicInstanceClick: onTopicInstanceClick })));
    };
    TwoWeekCalendar.defaultProps = {
        rasterSize: 50,
        utcToday: 1537308000000,
        holidaysData: [],
        otherEventsData: [],
        onTopicInstanceClick: function () { }
    };
    return TwoWeekCalendar;
}(Component));
export default TwoWeekCalendar;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TwoWeekCalendar.js.map