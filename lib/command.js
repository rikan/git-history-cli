let exec = require('child_process').exec;

let cmd = 'git remote -v';
exec(cmd, function (error, stdout, stderr) {
});

let _execute = function (cmd) {
    let out;
    exec(cmd, function (error, stdout, stderr) {
        if (error !== null) {
            console.log('出错了：' + stderr);
            throw Exception(error)
        }
        out = stdout;
    });
    return out;
};