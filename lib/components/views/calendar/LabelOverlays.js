var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import ComponentProvider from '../../provider/componentProvider';
var StyledOverlayLabel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  z-index: 0;\n  left: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  z-index: 0;\n  left: ", ";\n  width: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.left + "px"; }, function (props) { return props.width + "px"; });
var LabelOverlays = function (_a) {
    var rasterSize = _a.rasterSize, labelArray = _a.labelArray;
    return (React.createElement(React.Fragment, null, labelArray.map(function (label) { return (React.createElement(StyledOverlayLabel, { left: label.startIndex * rasterSize, width: (label.endIndex - label.startIndex + 1) * rasterSize },
        React.createElement(ComponentProvider.Label, { caption: label.name, type: 'large' }))); })));
};
export default LabelOverlays;
var templateObject_1;
//# sourceMappingURL=LabelOverlays.js.map