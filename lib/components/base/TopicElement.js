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
var ElementContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  border: 1px solid #979797;\n  border-radius: 5px;\n  text-align: center;\n  cursor: ", ";\n  display: inline-block;\n  * {\n    box-sizing: border-box;\n  }\n  vertical-align: top;\n"], ["\n  box-sizing: border-box;\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  border: 1px solid #979797;\n  border-radius: 5px;\n  text-align: center;\n  cursor: ",
    ";\n  display: inline-block;\n  * {\n    box-sizing: border-box;\n  }\n  vertical-align: top;\n"])), function (_a) {
    var height = _a.height;
    return height + "px";
}, function (_a) {
    var width = _a.width;
    return width + "px";
}, function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var isInteractive = _a.isInteractive;
    return isInteractive ? 'pointer' : 'inherit';
});
var TextContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  user-select: none;\n  pointer-events: none;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: sans-serif;\n  font-size: 13px;\n  /* height - border width */\n  line-height: ", ";\n  color: #4a4a4a;\n"], ["\n  user-select: none;\n  pointer-events: none;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: sans-serif;\n  font-size: 13px;\n  /* height - border width */\n  line-height: ", ";\n  color: #4a4a4a;\n"])), function (_a) {
    var height = _a.height;
    return height - 2 + "px";
});
var TopicElement = (function (_super) {
    __extends(TopicElement, _super);
    function TopicElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopicElement.prototype.render = function () {
        var _a = this.props, height = _a.height, color = _a.color, text = _a.text, width = _a.width, onClick = _a.onClick;
        return (React.createElement(ElementContainer, { width: width, height: height, color: color, isInteractive: !!onClick, onClick: onClick },
            React.createElement(TextContainer, { height: height, width: width }, text)));
    };
    TopicElement.defaultProps = {
        size: 'small',
        color: '#FFFFFF'
    };
    return TopicElement;
}(Component));
export default TopicElement;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TopicElement.js.map