let verbose = require('../index').verbose;

let execSync = require('child_process').execSync;

exports.exec = function (cmd) {
    if (!cmd) {
        console.error('cmd is empty.');
    }
    if (verbose) {
        console.log(cmd);
    }
    return String(execSync(cmd));
};