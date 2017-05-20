let {exec} = require('./execute-cmd');
const constants = require('./constants').constants;

function isGitInstalled() {
    return exec(constants.COMMAND_GIT_VERSION).indexOf(constants.MSG_GIT_INSTALLED) !== -1;
}

function isGitInited() {
    return exec(constants.COMMAND_GIT_STATUS).indexOf(constants.MSG_GIT_INITED) === -1;
}

function initGit() {
    exec(constants.COMMAND_GIT_INIT);
}

function addGitRepo(url, shortName) {
    if (!shortName) {
        shortName = constants.PREFIX_GHC_REPO + Date.now();
    }
    exec(constants.COMMAND_GIT_ADD_REMOTE + ` ${shortName} ${url}`);
}

function showHistory(url, branch, search) {
    if (!branch) {
        branch = 'master';
    }
    if (!search) {
        search = '';
    }
    exec(constants.COMMAND_GIT_FETCH + `${url} ${branch}`);
    return exec(constants.COMMAND_GIT_LOG)
}

exports.commands = {
    isGitInstalled,
    isGitInited,
    initGit,
    addGitRepo,
    showHistory
};