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
var componentProvider_1 = __importDefault(require("../../provider/componentProvider"));
var YearlyCalendar_1 = __importDefault(require("./YearlyCalendar"));
var ThreeMonthCalendar_1 = __importDefault(require("./ThreeMonthCalendar"));
var TwoWeekCalendar_1 = __importDefault(require("./TwoWeekCalendar"));
var StyledNotifications = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 100px;\n"], ["\n  min-height: 100px;\n"])));
var StyledLabelContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 15px 0px 20px;\n"], ["\n  margin: 15px 0px 20px;\n"])));
var StyledContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"], ["\n  > * {\n    box-sizing: border-box;\n    line-height: normal;\n    outline: none;\n  }\n"])));
var TWO_WEEK_RASTER_SIZE = 50;
var THREE_MONTH_RASTER_SIZE = 55;
var CalendarView = (function (_super) {
    __extends(CalendarView, _super);
    function CalendarView(props) {
        var _this = _super.call(this, props) || this;
        _this.buildTwoWeekCalendar = function () {
            return (react_1.default.createElement(TwoWeekCalendar_1.default, __assign({}, _this.props, { rasterSize: TWO_WEEK_RASTER_SIZE })));
        };
        _this.buildThreeMonthCalendar = function () {
            return (react_1.default.createElement(ThreeMonthCalendar_1.default, __assign({}, _this.props, { rasterSize: THREE_MONTH_RASTER_SIZE })));
        };
        _this.buildYearlyCalendar = function () {
            return react_1.default.createElement(YearlyCalendar_1.default, __assign({}, _this.props));
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
        var calendar = this.buildCalendar(this.state.selectedCalendarType);
        return (react_1.default.createElement(StyledContainer, null,
            react_1.default.createElement(StyledNotifications, null),
            react_1.default.createElement(componentProvider_1.default.Tabs, { selected: this.state.selectedCalendarType, items: [
                    { id: 'YEAR', text: 'Schuljahr' },
                    { id: '3MONTH', text: 'Drei Monate' },
                    { id: '2WEEKS', text: 'Zwei Wochen' }
                ], onChange: function (id) {
                    return _this.onCalendarTypeChange(id);
                } }),
            react_1.default.createElement(StyledLabelContainer, null,
                react_1.default.createElement(componentProvider_1.default.Label, { caption: this.getCurrentDayString(this.props.utcToday), type: "large" })),
            calendar));
    };
    CalendarView.defaultProps = {
        rasterSize: 15
    };
    return CalendarView;
}(react_1.Component));
exports.default = CalendarView;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CalendarView.js.map