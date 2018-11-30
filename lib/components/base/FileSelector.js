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
import uniqueId from 'lodash/uniqueId';
var StyledFileName = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 10px;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 10px;\n"])));
var StyledRemove = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n"])));
var FileSelector = (function (_super) {
    __extends(FileSelector, _super);
    function FileSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onComplete = function (file) {
            _this.props.onFormChange(_this.props.files.concat([file]));
        };
        _this.onError = function (tempId) { };
        _this.onFileAdd = function (file) {
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
            React.createElement("div", null, files.map(function (file) { return (React.createElement("div", null,
                React.createElement(StyledFileName, { key: "fileName-" + file.id, onClick: function () { return _this.props.onFileClick(file); } }, file.name),
                React.createElement(StyledRemove, { key: "remove-" + file.id, onClick: function () { return _this.handleFileRemove(file); } }, "Remove"))); })),
            React.createElement("input", { type: "file", onChange: this.handleFileInput, multiple: true })));
    };
    return FileSelector;
}(Component));
export default FileSelector;
var templateObject_1, templateObject_2;
//# sourceMappingURL=FileSelector.js.map