const fs = require('fs');

function readPackageJson() {
    return fs.readFileSync('package.json');
}

module.exports = readPackageJson;
