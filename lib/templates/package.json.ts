export function packageJson(appName = '') {
    return `
     {
  "name": "${appName.toLowerCase()}",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "nodemon server.js",
    "watch": "tsc -w"
  },
  "keywords": [
    "Node",
    "Typescript",
    "postgresql"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@types/body-parser": "^1.16.8",
    "@types/express": "^4.0.39",
    "@types/joi": "^13.0.1",
    "@types/nconf": "0.0.34",
    "@types/node": "^7.0.48",
    "@types/sequelize": "^4.0.79",
    "@types/winston": "^2.3.7",
    "typescript": "^2.6.2"
  },
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "joi": "^13.0.2",
    "morgan": "^1.9.0",
    "nconf": "^0.8.5",
    "nodemon": "^1.12.1",
    "pg": "^6.4.2",
    "sequelize": "^3.31.1",
    "winston": "^2.4.0"
  }
}
    `
}