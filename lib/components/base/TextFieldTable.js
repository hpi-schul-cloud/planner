var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import TextField from './TextField';
var StyledCell = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: table-cell;\n  padding: 0px 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"], ["\n  display: table-cell;\n  padding: 0px 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"])));
var StyledRow = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: table-row;\n  ", ":nth-child(1) {\n    border-right: 1px solid #979797;\n  }\n"], ["\n  display: table-row;\n  ", ":nth-child(1) {\n    border-right: 1px solid #979797;\n  }\n"])), StyledCell);
var StyledTable = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: table;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  ", ":nth-child(2n + 1) {\n    background: #f7f7f7;\n  }\n  ", ":first-child {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  }\n  ", ":last-child {\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n"], ["\n  display: table;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  ", ":nth-child(2n + 1) {\n    background: #f7f7f7;\n  }\n  ", ":first-child {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  }\n  ", ":last-child {\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n"])), StyledRow, StyledRow, StyledRow);
var StyledTextField = styled(TextField)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: none;\n  border: none;\n"], ["\n  background: none;\n  border: none;\n"])));
var TextFieldTable = function (_a) {
    var rows = _a.rows, label = _a.label, onChange = _a.onChange;
    function onRowChange(index, value) {
        onChange(rows.slice(0, index).concat([
            {
                caption: rows[index].caption,
                value: value
            }
        ], rows.slice(index + 1)));
    }
    var labelComponent = label ? React.createElement(Label, { caption: label }) : null;
    return (React.createElement(React.Fragment, null,
        labelComponent,
        React.createElement(StyledTable, null, rows.map(function (row, i) { return (React.createElement(StyledRow, { key: i },
            React.createElement(StyledCell, null, row.caption),
            React.createElement(StyledCell, null,
                React.createElement(StyledTextField, { value: row.value, margin: "normal", fullWidth: true, onChange: function (event) { return onRowChange(i, event.target.value); } })))); }))));
};
export default TextFieldTable;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TextFieldTable.js.map