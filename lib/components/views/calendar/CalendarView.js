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
import React, { Component } from 'react';
import styled from 'styled-components';
import ComponentProvider from '../../provider/componentProvider';
import YearlyCalendar from './YearlyCalendar';
import ThreeMonthCalendar from './ThreeMonthCalendar';
import TwoWeekCalendar from './TwoWeekCalendar';
var StyledNotifications = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 100px;\n"], ["\n  min-height: 100px;\n"])));
var StyledLabelContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 15px 0px 20px;\n"], ["\n  margin: 15px 0px 20px;\n"])));
var StyledContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"], ["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"])));
var TWO_WEEK_RASTER_SIZE = 50;
var THREE_MONTH_RASTER_SIZE = 55;
var sortClassTopicsData = function (classTopicsData) {
    for (var classIndex in classTopicsData) {
        for (var subjectIndex in classTopicsData[classIndex].classes) {
            var classInstance = classTopicsData[classIndex].classes[subjectIndex];
            classInstance.topics = classInstance.topics.sort(function (firstTopic, secondTopic) {
                return firstTopic.utcStartDate - secondTopic.utcStartDate;
            });
        }
    }
};
var CalendarView = (function (_super) {
    __extends(CalendarView, _super);
    function CalendarView(props) {
        var _this = _super.call(this, props) || this;
        _this.buildTwoWeekCalendar = function () {
            return (React.createElement(TwoWeekCalendar, __assign({}, _this.props, { rasterSize: TWO_WEEK_RASTER_SIZE })));
        };
        _this.buildThreeMonthCalendar = function () {
            return (React.createElement(ThreeMonthCalendar, __assign({}, _this.props, { rasterSize: THREE_MONTH_RASTER_SIZE })));
        };
        _this.buildYearlyCalendar = function () {
            return React.createElement(YearlyCalendar, __assign({}, _this.props));
        };
        _this.buildCalendar = function (selectedCalendarType) {
            switch (selectedCalendarType) {
                case 'YEAR':
                    return _this.buildYearlyCalendar();
                case '3MONTH':
                    return _this.buildThreeMonthCalendar();
                case '2WEEKS':
                    return _this.buildTwoWeekCalendar();
            }
        };
        _this.onCalendarTypeChange = function (calendarType) {
            _this.setState({
                selectedCalendarType: calendarType
            });
        };
        _this.state = { selectedCalendarType: 'YEAR' };
        return _this;
    }
    CalendarView.prototype.getCurrentDayString = function (utcToday) {
        var today = new Date(utcToday);
        return "Heute ist der " + ("" + today.getUTCDate()).padStart(2, '0') + "." + ("" + (today.getUTCMonth() + 1)).padStart(2, '0') + ".";
    };
    CalendarView.prototype.render = function () {
        var _this = this;
        sortClassTopicsData(this.props.classTopicsData);
        var calendar = this.buildCalendar(this.state.selectedCalendarType);
        return (React.createElement(StyledContainer, null,
            React.createElement(StyledNotifications, null),
            React.createElement(ComponentProvider.Tabs, { selected: this.state.selectedCalendarType, items: [
                    { id: 'YEAR', text: 'Schuljahr' },
                    { id: '3MONTH', text: 'Drei Monate' },
                    { id: '2WEEKS', text: 'Zwei Wochen' }
                ], onChange: function (id) {
                    return _this.onCalendarTypeChange(id);
                } }),
            React.createElement(StyledLabelContainer, null,
                React.createElement(ComponentProvider.Label, { caption: this.getCurrentDayString(this.props.utcToday), type: "large" })),
            calendar));
    };
    CalendarView.defaultProps = {
        rasterSize: 15
    };
    return CalendarView;
}(Component));
export default CalendarView;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CalendarView.js.map