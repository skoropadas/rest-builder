import * as commander from "commander";

commander
    .command('init <appName>')
    .action(function (appName) {
        initApp(appName)
    });

function initApp(appName: any) {
    console.log('initApp', appName, process.cwd())
}