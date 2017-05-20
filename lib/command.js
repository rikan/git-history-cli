let {exec} = require('./execute-cmd');
let extend = require('util')._extend;
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

function showHistory(url, options) {
    let _options = extend({}, options);

    if (typeof options.number === Number) {
        _options.number = '--' + options.search + '"';
    } else {
        _options.number = '';
    }

    if (typeof options.branch !== typeof '') {
        _options.branch = '';
    }

    if (!options.until) {
        _options.until = '';
    } else {
        _options.until = '--until "' + options.until + '"';
    }

    if (!options.since) {
        _options.since = '';
    } else {
        _options.since = '--since "' + options.since + '"';
    }

    if (options.search) {
        _options.search = '--grep=' + options.search;
    } else {
        _options.search = '';
    }
    if (options.pretty) {
        _options.pretty = ' --pretty=format:"%h - %an, %ar : %s" ';
    } else {
        _options.pretty = '';
    }

    exec(constants.COMMAND_GIT_FETCH + `${url}`);
    return exec(constants.COMMAND_GIT_LOG + `${_options.pretty} ${_options.branch} ${_options.search} ${_options.number} ${_options.until} ${_options.since}`)
}

exports.commands = {
    isGitInstalled,
    isGitInited,
    initGit,
    addGitRepo,
    showHistory
};