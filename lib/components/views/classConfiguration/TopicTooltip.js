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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var IconTrash_1 = __importDefault(require("../../../assets/IconTrash"));
var IconEdit_1 = __importDefault(require("../../../assets/IconEdit"));
var react_2 = __importDefault(require("@tippy.js/react"));
require("tippy.js/dist/tippy.css");
styled_components_1.injectGlobal(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .tippy-tooltip.custom-theme {\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    > .enter {\n      background-color: transparent;\n    }\n  }\n\n  .tippy-popper[x-placement^=top] [x-arrow] {\n    border-top: 7px solid transparent;\n  }\n"], ["\n  .tippy-tooltip.custom-theme {\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    > .enter {\n      background-color: transparent;\n    }\n  }\n\n  .tippy-popper[x-placement^=top] [x-arrow] {\n    border-top: 7px solid transparent;\n  }\n"])));
var StyledIcon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1px;\n  display: inline-block;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.54);\n  :hover {\n    color: #f00;\n  }\n"], ["\n  font-size: 1px;\n  display: inline-block;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.54);\n  :hover {\n    color: #f00;\n  }\n"])));
var StyledTooltip = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background: #e9e8e8;\n  padding: 4px 10px;\n  border-radius: 4px;\n  ", " {\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n  ", " ~ ", " {\n    margin-right: 5px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background: #e9e8e8;\n  padding: 4px 10px;\n  border-radius: 4px;\n  ", " {\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n  ", " ~ ", " {\n    margin-right: 5px;\n  }\n"])), StyledIcon, StyledIcon, StyledIcon);
var StyledTooltipContainer = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  > * {\n    outline: none;\n  }\n"], ["\n  > * {\n    outline: none;\n  }\n"])));
var TopicTooltip = (function (_super) {
    __extends(TopicTooltip, _super);
    function TopicTooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tippyRef = null;
        return _this;
    }
    TopicTooltip.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isDisabled !== this.props.isDisabled) {
            if (this.props.isDisabled) {
                this.tippyRef.hide();
                this.tippyRef.disable();
            }
            else {
                this.tippyRef.enable();
            }
        }
    };
    TopicTooltip.prototype.componentWillUnmount = function () {
        this.tippyRef.destroy();
    };
    TopicTooltip.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, onEditClick = _a.onEditClick, onDeleteClick = _a.onDeleteClick;
        return (react_1.default.createElement(StyledTooltipContainer, null,
            react_1.default.createElement(react_2.default, { onCreate: function (tip) {
                    _this.tippyRef = tip;
                }, size: "small", animateFill: false, delay: [1000, 0], duration: [0, 0], interactive: true, theme: "custom", distance: 5, content: react_1.default.createElement(StyledTooltip, null,
                    onEditClick && (react_1.default.createElement(StyledIcon, { onClick: onEditClick },
                        react_1.default.createElement(IconEdit_1.default, { height: 20, width: 20 }))),
                    onDeleteClick && (react_1.default.createElement(StyledIcon, { onClick: onDeleteClick },
                        react_1.default.createElement(IconTrash_1.default, { height: 20, width: 20 })))) }, children)));
    };
    return TopicTooltip;
}(react_1.default.Component));
exports.default = TopicTooltip;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TopicTooltip.js.map