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
var plannerBase_1 = require("../../plannerBase");
var generalStylesProvider_1 = __importDefault(require("../../provider/generalStylesProvider"));
var LabelOverlays_1 = __importDefault(require("./LabelOverlays"));
var timeHelper_1 = require("./timeHelper");
var dayClassRowsHelper_1 = require("./dayClassRowsHelper");
var RasterRow_1 = __importDefault(require("./RasterRow"));
var RasterRowContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n"], ["\n  padding-top: ",
    ";\n  padding-bottom: ",
    ";\n"])), function (_a) {
    var isFirstRow = _a.isFirstRow, isFirstRowOfClass = _a.isFirstRowOfClass;
    return isFirstRow ? '21px' : isFirstRowOfClass ? '37px' : '14px';
}, function (_a) {
    var isLastRow = _a.isLastRow;
    return isLastRow ? '21px' : '0px';
});
var StyledFlexContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"])));
var StyledFlexChild = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  font-family: ", ";\n  font-size: 14px;\n  color: ", ";\n"], ["\n  display: inline-block;\n  font-family: ",
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
                var indices = dayClassRowsHelper_1.determineIndices({
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
                    result.push(react_1.default.createElement(RasterRowContainer, { isFirstRow: isFirstRow, isFirstRowOfClass: isFirstRowOfClass, isLastRow: isLastRow, key: classData.className + "-" + subject.subjectId },
                        react_1.default.createElement(RasterRow_1.default, { topicElements: transformedTopicElements, rasterSize: _this.props.rasterSize, rasterCount: rasterCount, topicElementSize: 'large', onTopicInstanceClick: _this.props.onTopicInstanceClick })));
                });
            });
            return result;
        };
        return _this;
    }
    ClassRows.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.rowPeriod, utcStartDate = _b.utcStartDate, utcEndDate = _b.utcEndDate, rasterSize = _a.rasterSize, utcToday = _a.utcToday, classTopicsData = _a.classTopicsData, holidaysData = _a.holidaysData, otherEventsData = _a.otherEventsData;
        var utcStartDateString = timeHelper_1.getDayAndMonthString(new Date(utcStartDate));
        var utcEndDateString = timeHelper_1.getDayAndMonthString(new Date(utcEndDate));
        var rasterCount = timeHelper_1.getDayCount(this.props.rowPeriod.utcStartDate, this.props.rowPeriod.utcEndDate);
        var _c = dayClassRowsHelper_1.getEventMaps(holidaysData, otherEventsData, this.props.rowPeriod), columnColorMap = _c.columnColorMap, eventTypeMap = _c.eventTypeMap, eventArray = _c.eventArray;
        var topLabelMap = plannerBase_1.generateDayLabelMap(utcStartDate, utcEndDate);
        var rows = this.getClassRows(classTopicsData, rasterCount, eventTypeMap);
        var todayLineIndex = utcToday - utcStartDate > 0
            ? timeHelper_1.getDayDifference(new Date(utcToday), new Date(utcStartDate))
            : 0;
        return (react_1.default.createElement(plannerBase_1.TimeRasterWrapper, { rasterCount: rasterCount, rasterSize: rasterSize, columnColorMap: columnColorMap, topLabelsMap: topLabelMap, className: className, todayLineIndex: todayLineIndex, topChildren: react_1.default.createElement(StyledFlexContainer, null,
                react_1.default.createElement(StyledFlexChild, { styles: generalStylesProvider_1.default.styles }, utcStartDateString),
                react_1.default.createElement(StyledFlexChild, { styles: generalStylesProvider_1.default.styles }, utcEndDateString)) },
            react_1.default.createElement(react_1.default.Fragment, null,
                rows,
                react_1.default.createElement(LabelOverlays_1.default, { rasterCount: rasterCount, rasterSize: rasterSize, labelArray: eventArray }))));
    };
    return ClassRows;
}(react_1.Component));
exports.default = ClassRows;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=DayClassRows.js.map