var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Select from './Select';
import TextField from './TextField';
var ItemDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  > * {\n    margin-right: 10px;\n    :last-child {\n      margin-right: 0px;\n    }\n  }\n  padding-bottom: 5px;\n  :last-child {\n    padding-bottom: 0px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  > * {\n    margin-right: 10px;\n    :last-child {\n      margin-right: 0px;\n    }\n  }\n  padding-bottom: 5px;\n  :last-child {\n    padding-bottom: 0px;\n  }\n"])));
function SelectorInput(props) {
    function removeItem(index) {
        props.onChange(props.values.slice(0, index).concat(props.values.slice(index + 1)));
    }
    function addField() {
        props.onChange(props.values.concat([
            {
                typeValue: props.typeOptions[0].value,
                timeValue: props.timeOptions[0].value,
                textValue: ''
            }
        ]));
    }
    function changeField(index, newValue) {
        props.onChange(props.values.slice(0, index).concat([
            __assign({}, props.values[index], newValue)
        ], props.values.slice(index + 1)));
    }
    var typeOptions = props.typeOptions, timeOptions = props.timeOptions, values = props.values;
    return (React.createElement("div", null,
        values.map(function (value, index) { return (React.createElement(ItemDiv, null,
            React.createElement(Select, { initialValue: value.typeValue, onChange: function (event) {
                    return changeField(index, { typeValue: event.currentTarget.value });
                }, values: typeOptions.map(function (option) { return ({
                    text: option.text,
                    value: option.value
                }); }) }),
            React.createElement(Select, { initialValue: value.timeValue, onChange: function (event) {
                    return changeField(index, { timeValue: event.currentTarget.value });
                }, values: timeOptions.map(function (option) { return ({
                    text: option.text,
                    value: option.value
                }); }) }),
            React.createElement(TextField, { value: value.textValue, onChange: function (event) {
                    return changeField(index, { textValue: event.currentTarget.value });
                } }),
            React.createElement(Button, { onClick: function () { return removeItem(index); }, caption: "x" }))); }),
        React.createElement(Button, { onClick: addField, caption: "+" })));
}
export default SelectorInput;
var templateObject_1;
//# sourceMappingURL=SelectorInput.js.map