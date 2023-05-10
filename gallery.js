const fs = require("fs")
const path = require("path")

function extract(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        throw new Error("The directory does not exist");
    }
    const directory = fs.readdirSync(directoryPath)
    let result = [], content;

    directory.forEach(file => {
        if (fs.statSync(directoryPath + "/" + file).isFile()) {
            content = fs.readFileSync(directoryPath + "/" + file);
            let match = String(content).match(/[a-z0-9_\.+-]+(@)[a-z0-9\.-]+(\.)[a-zA-Z0-9\.]+[a-zA-Z0-9\.]+/g);
            if (match){
                for (const j of match) {
                    result.push(j);
                }
            }
        }
    }
    );
    return result;
}
module.exports = {
    extract,
}
//console.log(extract("./test"));