"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class JsonReader {
    readData(path, propertyToRetrieve) {
        var rawData = fs.readFileSync(path);
        var parse = JSON.parse(rawData);
        var propertyValue = parse[propertyToRetrieve];
        return propertyValue;
    }
}
exports.JsonReader = JsonReader;
