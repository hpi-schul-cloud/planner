"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Label_1 = __importDefault(require("./Label"));
var TextField_1 = __importDefault(require("./TextField"));
var StyledCell = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: table-cell;\n  padding: 5px 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"], ["\n  display: table-cell;\n  padding: 5px 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #4a4a4a;\n"])));
var StyledRow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: table-row;\n  ", ":nth-child(1) {\n    border-right: 1px solid #979797;\n  }\n"], ["\n  display: table-row;\n  ", ":nth-child(1) {\n    border-right: 1px solid #979797;\n  }\n"])), StyledCell);
var StyledTable = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: table;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  ", ":nth-child(2n + 1) {\n    background: #f7f7f7;\n  }\n  ", ":first-child {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  }\n  ", ":last-child {\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n"], ["\n  display: table;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  ", ":nth-child(2n + 1) {\n    background: #f7f7f7;\n  }\n  ", ":first-child {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  }\n  ", ":last-child {\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n"])), StyledRow, StyledRow, StyledRow);
var StyledTextField = styled_components_1.default(TextField_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: none;\n  border: none;\n"], ["\n  background: none;\n  border: none;\n"])));
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
    var labelComponent = label ? react_1.default.createElement(Label_1.default, { caption: label }) : null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        labelComponent,
        react_1.default.createElement(StyledTable, null, rows.map(function (row, i) { return (react_1.default.createElement(StyledRow, { key: i },
            react_1.default.createElement(StyledCell, null, row.caption),
            react_1.default.createElement(StyledCell, null,
                react_1.default.createElement(StyledTextField, { value: row.value, margin: "dense", fullWidth: true, onChange: function (event) { return onRowChange(i, event.target.value); } })))); }))));
};
exports.default = TextFieldTable;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TextFieldTable.js.map