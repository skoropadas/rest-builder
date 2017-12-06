"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = require("./templates/package.json");
var fileStream = require('fs');
var ETemplateType;
(function (ETemplateType) {
    ETemplateType[ETemplateType["PACKAGE_JSON"] = 0] = "PACKAGE_JSON";
})(ETemplateType = exports.ETemplateType || (exports.ETemplateType = {}));
var FileManager = /** @class */ (function () {
    function FileManager() {
    }
    FileManager.prototype.readTemplate = function (templateType, params) {
        switch (templateType) {
            case ETemplateType.PACKAGE_JSON:
                return package_json_1.packageJson(params);
        }
    };
    return FileManager;
}());
exports.FileManager = FileManager;
