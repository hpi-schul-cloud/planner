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
import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import Button from './Button';
var StyledFileName = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 10px;\n  color: #5e5e5e;\n  padding: 8px;\n  margin-bottom: 5px;\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  &:hover {\n    color: #b10438;\n  }\n"], ["\n  font-family: sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 10px;\n  color: #5e5e5e;\n  padding: 8px;\n  margin-bottom: 5px;\n  background: #ffffff;\n  border: 1px solid #979797;\n  border-radius: 5px;\n  &:hover {\n    color: #b10438;\n  }\n"])));
var StyledRemove = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  color: #5e5e5e;\n  &:hover {\n    color: #b10438;\n  }\n"], ["\n  font-family: sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  color: #5e5e5e;\n  &:hover {\n    color: #b10438;\n  }\n"])));
var StyledUpload = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"])));
var FileSelector = (function (_super) {
    __extends(FileSelector, _super);
    function FileSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = createRef();
        _this.state = {
            loadingItems: []
        };
        _this.onComplete = function (file, tempId) {
            _this.props.onFormChange(_this.props.files.concat([file]));
            _this.setState({
                loadingItems: _this.state.loadingItems.filter(function (item) { return item !== tempId; }).slice()
            });
        };
        _this.onError = function (tempId) {
            _this.setState({
                loadingItems: _this.state.loadingItems.filter(function (item) { return item !== tempId; }).slice()
            });
        };
        _this.onFileAdd = function (file) {
            _this.setState({
                loadingItems: _this.state.loadingItems.concat([file.tempId])
            });
            _this.props.onFileAdd({
                file: file,
                onComplete: _this.onComplete,
                onError: _this.onError
            });
        };
        _this.handleFileRemove = function (file) {
            _this.props.onFileRemove(file);
            var newFiles = _this.props.files.filter(function (existingFile) { return existingFile.id !== file.id; });
            _this.props.onFormChange(newFiles);
        };
        _this.handleFileInput = function (event) {
            event.preventDefault();
            var files = event.target.files;
            if (files)
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    _this.onFileAdd({
                        file: file,
                        tempId: uniqueId('temp_')
                    });
                }
            event.target.value = '';
        };
        return _this;
    }
    FileSelector.prototype.render = function () {
        var _this = this;
        var files = this.props.files;
        return (React.createElement(React.Fragment, null,
            files.map(function (file) { return (React.createElement("div", { key: "" + file.id },
                React.createElement(StyledFileName, { onClick: function () { return _this.props.onFileClick(file); } }, file.name),
                React.createElement(StyledRemove, { onClick: function () { return _this.handleFileRemove(file); } }, "Entfernen"))); }),
            this.state.loadingItems.length > 0 && React.createElement("div", null, "Upload l\u00E4uft..."),
            React.createElement(StyledUpload, null,
                React.createElement("input", { ref: this.ref, style: { display: 'none' }, type: "file", onChange: this.handleFileInput, multiple: true }),
                React.createElement(Button, { caption: "Dateien hochladen...", onClick: function () { return (_this.ref.current ? _this.ref.current.click() : null); } }))));
    };
    return FileSelector;
}(Component));
export default FileSelector;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=FileSelector.js.map