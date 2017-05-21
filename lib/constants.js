const COMMAND_GIT_VERSION = 'git version ';
const COMMAND_GIT_STATUS = 'git status ';
const COMMAND_GIT_REMOTES = 'git remote -v ';
const COMMAND_GIT_INIT = 'git init ';
const COMMAND_GIT_ADD_REMOTE = 'git remote add ';
const COMMAND_GIT_LOG = 'git log FETCH_HEAD ';
const COMMAND_GIT_FETCH = 'git fetch ';

const PREFIX_GHC_REPO = 'ghc-';

const MSG_GIT_INSTALLED = 'git version';
const MSG_GIT_INITED = 'Not a git repository';

exports.constants = {
    COMMAND_GIT_VERSION,
    COMMAND_GIT_STATUS,
    COMMAND_GIT_REMOTES,
    COMMAND_GIT_INIT,
    PREFIX_GHC_REPO,
    MSG_GIT_INSTALLED,
    MSG_GIT_INITED,
    COMMAND_GIT_ADD_REMOTE,
    COMMAND_GIT_LOG,
    COMMAND_GIT_FETCH
};