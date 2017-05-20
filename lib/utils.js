const constants = require('./constants').constants;

function isGhcRepo(name) {
    return name && name.indexOf(constants.PREFIX_GHC_REPO) === 0;
}

exports.utils = {
    isGhcRepo
};