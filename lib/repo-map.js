let {exec} = require('./execute-cmd');
const constants = require('./constants').constants;

exports.load = function () {
    let map = {};
    let out = exec(constants.COMMAND_GIT_REMOTES);
    if (!out) {
        return map;
    }
    let outList = out.split('\n');
    for (let item of outList) {
        if (item) {
            let itemList = item.split(/[\t\s]/);
            if (itemList[2] === '(fetch)') {
                map[itemList[0]] = itemList[1];
            }
        }
    }
    return map;
};