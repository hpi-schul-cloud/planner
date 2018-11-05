var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  padding: 8px 4px;\n  ::before {\n    content: ' ';\n    position: absolute;\n    z-index: -1;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 8px;\n    border-bottom: 1px solid #979797;\n  }\n  > * {\n    margin-right: 10px;\n  }\n  & :last-child {\n    margin-right: 0px;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  padding: 8px 4px;\n  ::before {\n    content: ' ';\n    position: absolute;\n    z-index: -1;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 8px;\n    border-bottom: 1px solid #979797;\n  }\n  > * {\n    margin-right: 10px;\n  }\n  & :last-child {\n    margin-right: 0px;\n  }\n"])));
var StyledItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n  border-bottom: 3px solid\n    ", ";\n  cursor: pointer;\n  :hover {\n    border-bottom: 3px solid\n      ", ";\n  }\n  padding-bottom: 2px;\n"], ["\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n  border-bottom: 3px solid\n    ",
    ";\n  cursor: pointer;\n  :hover {\n    border-bottom: 3px solid\n      ",
    ";\n  }\n  padding-bottom: 2px;\n"])), function (_a) {
    var color = _a.color, isSelected = _a.isSelected;
    return isSelected ? color : 'transparent';
}, function (_a) {
    var color = _a.color;
    return color ? color : 'transparent';
});
var Tabs = function (props) {
    var selected = props.selected, items = props.items, onChange = props.onChange;
    var onClick = function (id) {
        if (id !== props.selected)
            onChange(id);
    };
    return (React.createElement(StyledContainer, null, items.map(function (item) { return (React.createElement(StyledItem, { key: item.id, isSelected: selected === item.id, color: item.color || '#4a4a4a', onClick: function () { return onClick(item.id); } }, item.text)); })));
};
export default Tabs;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Tabs.js.map