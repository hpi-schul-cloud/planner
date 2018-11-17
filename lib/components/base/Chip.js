var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledChip = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #f2f2f2;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  @media (max-width: 400px) {\n    padding: 5px 5px;\n  }\n"], ["\n  background: #f2f2f2;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  @media (max-width: 400px) {\n    padding: 5px 5px;\n  }\n"])));
var StyledFlexChild = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 0px;\n  display: flex;\n  align-items: baseline;\n"], ["\n  min-width: 0px;\n  display: flex;\n  align-items: baseline;\n"])));
var StyledBigLabel = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"], ["\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"])));
var StyledCloseLabel = styled(StyledBigLabel)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 0px 5px;\n  :hover {\n    color: #797979;\n  }\n"], ["\n  cursor: pointer;\n  padding: 0px 5px;\n  :hover {\n    color: #797979;\n  }\n"])));
var StyledFirstlabel = styled(StyledBigLabel)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 10px;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 0;\n  @media (max-width: 400px) {\n    margin-right: 5px;\n  }\n"], ["\n  margin-right: 10px;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 0;\n  @media (max-width: 400px) {\n    margin-right: 5px;\n  }\n"])));
var StyledSecondLabel = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #4a4a4a;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  font-family: sans-serif;\n  font-size: 12px;\n  color: #4a4a4a;\n  min-width: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var Chip = function (_a) {
    var _b = _a.firstLabel, firstLabel = _b === void 0 ? '' : _b, _c = _a.secondLabel, secondLabel = _c === void 0 ? '' : _c, _d = _a.onDeleteClick, onDeleteClick = _d === void 0 ? function () { } : _d;
    return (React.createElement(StyledChip, null,
        React.createElement(StyledFlexChild, null,
            React.createElement(StyledFirstlabel, null, firstLabel),
            React.createElement(StyledSecondLabel, null, secondLabel)),
        React.createElement(StyledCloseLabel, { onClick: onDeleteClick }, "x")));
};
export default Chip;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Chip.js.map