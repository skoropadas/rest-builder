"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
commander
    .command('init <appName>')
    .action(function (appName) {
    initApp(appName);
});
function initApp(appName) {
    console.log('initApp', appName, process.cwd());
}
