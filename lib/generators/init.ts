import * as commander from "commander";
import {ETemplateType, FileManager} from "../file-manager";

commander
    .command('init <appName>')
    .action(function (appName) {
        initApp(appName)
    });

function initApp(appName: any) {
    let fileManager = new FileManager();
    console.info('initApp', appName, fileManager.readTemplate(ETemplateType.PACKAGE_JSON, appName));
}