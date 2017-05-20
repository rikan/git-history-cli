

let execSync = require('child_process').execSync;

exports.exec = function (cmd) {
    if (!cmd) {
        console.error('cmd is empty.');
    }
    console.log(cmd);
    return String(execSync(cmd));
};