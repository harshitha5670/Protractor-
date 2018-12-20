const fs = require('fs')

export class JsonReader {
    public readData(path: string, propertyToRetrieve: string) {
        var rawData = fs.readFileSync(path)
        var parse = JSON.parse(rawData)
        var propertyValue = parse[propertyToRetrieve]
        return propertyValue

    }
}


