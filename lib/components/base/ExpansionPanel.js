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
import IconArrowUp from '../../assets/IconArrowDown';
import IconArrowDown from '../../assets/IconArrowUp';
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top: solid #979797 1px;\n  border-bottom: solid #979797 1px;\n"], ["\n  border-top: solid #979797 1px;\n  border-bottom: solid #979797 1px;\n"])));
var StyledCaptionContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  padding: 10px 5px 10px 0px;\n  cursor: pointer;\n  align-items: baseline;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  padding: 10px 5px 10px 0px;\n  cursor: pointer;\n  align-items: baseline;\n  justify-content: space-between;\n"])));
var StyledCaption = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n  padding-left: 24px;\n"], ["\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n  padding-left: 24px;\n"])));
var StyledContentContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 8px 24px 24px;\n  display: ", ";\n"], ["\n  padding: 8px 24px 24px;\n  display: ",
    ";\n"])), function (_a) {
    var isVisible = _a.isVisible;
    return isVisible ? 'block' : 'none';
});
var ExpansionPanel = (function (_super) {
    __extends(ExpansionPanel, _super);
    function ExpansionPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isExpanded: true
        };
        _this.toggleExpanded = function () {
            _this.setState({
                isExpanded: !_this.state.isExpanded
            });
        };
        return _this;
    }
    ExpansionPanel.prototype.render = function () {
        var _a = this.props, caption = _a.caption, className = _a.className, children = _a.children;
        return (React.createElement(StyledContainer, { className: className },
            React.createElement(StyledCaptionContainer, { onClick: this.toggleExpanded },
                React.createElement(StyledCaption, null, caption),
                this.state.isExpanded ? (React.createElement(IconArrowDown, { color: "#979797" })) : (React.createElement(IconArrowUp, { color: "#979797" }))),
            React.createElement(StyledContentContainer, { isVisible: this.state.isExpanded }, children)));
    };
    return ExpansionPanel;
}(Component));
export default ExpansionPanel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ExpansionPanel.js.map