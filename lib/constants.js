const COMMAND_GIT_VERSION = 'git version';
const COMMAND_GIT_STATUS = 'git status';
const COMMAND_GIT_REMOTES = 'git remote -v';
const COMMAND_GIT_INIT = 'git init';

const REGEX_REPO_FETCH = '(\S+)\s+(\S+.git)\s+\(fetch\)\n';
exports.constants = {
    COMMAND_GIT_VERSION,
    COMMAND_GIT_STATUS,
    COMMAND_GIT_REMOTES,
    COMMAND_GIT_INIT,
    REGEX_REPO_FETCH
};