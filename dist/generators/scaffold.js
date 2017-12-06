"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
commander
    .command('scaffold <appName> [fields...]')
    .action(function (appName, fields) {
    scaffold(appName, fields);
});
function scaffold(modelName, fields) {
    console.log(modelName, fields);
}
;
