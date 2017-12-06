import {packageJson} from "./templates/package.json";

const fileStream = require('fs');

export enum ETemplateType {
    PACKAGE_JSON
}

export class FileManager {

    public readTemplate(templateType: ETemplateType, params: any): string {
        switch (templateType) {
            case ETemplateType.PACKAGE_JSON:
                return packageJson(params);
        }
    }
}