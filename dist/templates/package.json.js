"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function packageJson(appName) {
    if (appName === void 0) { appName = ''; }
    return "\n     {\n  \"name\": \"" + appName.toLowerCase() + "\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"scripts\": {\n    \"start\": \"nodemon server.js\",\n    \"watch\": \"tsc -w\"\n  },\n  \"keywords\": [\n    \"Node\",\n    \"Typescript\",\n    \"postgresql\"\n  ],\n  \"author\": \"\",\n  \"license\": \"MIT\",\n  \"devDependencies\": {\n    \"@types/body-parser\": \"^1.16.8\",\n    \"@types/express\": \"^4.0.39\",\n    \"@types/joi\": \"^13.0.1\",\n    \"@types/nconf\": \"0.0.34\",\n    \"@types/node\": \"^7.0.48\",\n    \"@types/sequelize\": \"^4.0.79\",\n    \"@types/winston\": \"^2.3.7\",\n    \"typescript\": \"^2.6.2\"\n  },\n  \"dependencies\": {\n    \"body-parser\": \"^1.18.2\",\n    \"express\": \"^4.16.2\",\n    \"joi\": \"^13.0.2\",\n    \"morgan\": \"^1.9.0\",\n    \"nconf\": \"^0.8.5\",\n    \"nodemon\": \"^1.12.1\",\n    \"pg\": \"^6.4.2\",\n    \"sequelize\": \"^3.31.1\",\n    \"winston\": \"^2.4.0\"\n  }\n}\n    ";
}
exports.packageJson = packageJson;
