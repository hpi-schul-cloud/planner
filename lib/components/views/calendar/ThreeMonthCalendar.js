"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var RowCaptions_1 = __importDefault(require("./RowCaptions"));
var WeekClassRows_1 = __importDefault(require("./WeekClassRows"));
var calendarHelper_1 = require("./calendarHelper");
var StyledFlexContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n  }\n"], ["\n  display: flex;\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n  }\n"])));
var StyledRowCaptions = styled_components_1.default(RowCaptions_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-top: 47px;\n"], ["\n  padding-top: 47px;\n"])));
var ThreeMonthCalendar = (function (_super) {
    __extends(ThreeMonthCalendar, _super);
    function ThreeMonthCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeMonthCalendar.prototype.render = function () {
        var _a = this.props, utcToday = _a.utcToday, rasterSize = _a.rasterSize, classTopicsData = _a.classTopicsData, holidaysData = _a.holidaysData, otherEventsData = _a.otherEventsData, onTopicInstanceClick = _a.onTopicInstanceClick;
        var threeMonthTimePeriod = calendarHelper_1.getWeekPeriodForDate(utcToday, 12);
        var labels = classTopicsData.map(function (classTopic) { return ({
            topLabel: classTopic.className,
            subLabels: classTopic.classes.map(function (classTopic) { return classTopic.subjectName; })
        }); });
        var filteredHolidaysData = calendarHelper_1.filterRelevantElementData(threeMonthTimePeriod.utcStartDate, threeMonthTimePeriod.utcEndDate, holidaysData);
        var filteredOtherEventsData = calendarHelper_1.filterRelevantElementData(threeMonthTimePeriod.utcStartDate, threeMonthTimePeriod.utcEndDate, otherEventsData);
        var filteredClassTopicsData = calendarHelper_1.getFilteredClassTopicsData(classTopicsData, threeMonthTimePeriod);
        return (react_1.default.createElement(StyledFlexContainer, null,
            react_1.default.createElement(StyledRowCaptions, { labels: labels }),
            react_1.default.createElement(WeekClassRows_1.default, { rasterSize: rasterSize, rowPeriod: threeMonthTimePeriod, utcToday: utcToday, classTopicsData: filteredClassTopicsData, holidaysData: filteredHolidaysData, otherEventsData: filteredOtherEventsData, onTopicInstanceClick: onTopicInstanceClick })));
    };
    ThreeMonthCalendar.defaultProps = {
        rasterSize: 15,
        utcToday: 1537308000000,
        holidaysData: [],
        otherEventsData: [],
        onTopicInstanceClick: function () { }
    };
    return ThreeMonthCalendar;
}(react_1.Component));
exports.default = ThreeMonthCalendar;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ThreeMonthCalendar.js.map