import * as commander from "commander";

commander
    .command('scaffold <appName> [fields...]')
    .action(function (appName, fields) {
        scaffold(appName, fields)
    });

function scaffold(modelName: any, fields: any[]) {
    console.log(modelName, fields);
};