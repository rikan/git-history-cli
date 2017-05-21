#!/usr/bin/env node

let commands = require('../lib/command').commands;
let program = require('commander');

//check is git installed
if (!commands.isGitInstalled()) {
    console.error('please make sure git is installed and try again.');
    process.exit(1);
}

//check git folder is init
if (!commands.isGitInited()) {
    commands.initGit();
}

let version = require("../package.json").version;
//cli command
program
    .version(version)
    .command('list', 'list ghc cached repositories', {isDefault: true})
    .command('history <url>', 'retrieve remote git history')
    .parse(process.argv);