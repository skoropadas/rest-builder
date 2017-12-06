"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
var file_manager_1 = require("../file-manager");
commander
    .command('init <appName>')
    .action(function (appName) {
    initApp(appName);
});
function initApp(appName) {
    var fileManager = new file_manager_1.FileManager();
    console.info('initApp', appName, fileManager.readTemplate(file_manager_1.ETemplateType.PACKAGE_JSON, appName));
}
