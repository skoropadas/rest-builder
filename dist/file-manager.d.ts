export declare enum ETemplateType {
    PACKAGE_JSON = 0,
}
export declare class FileManager {
    readTemplate(templateType: ETemplateType, params: any): string;
}
