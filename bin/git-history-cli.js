#!/usr/bin/env node

let constants = require('../lib/constants');
let commands = require('../lib/command').commands;

//check is git installed
if (!commands.isGitInstalled()) {
    console.error('please make sure git is installed and try again.');
    process.exit(1);
}

//check git folder is init
if (!commands.isGitInited()) {
    commands.initGit();
}


let program = require('commander');
let version = require("../package.json").version;
let loader = require('../lib/repo-map');
//cli command
program
    .version(version)
    .command('list', 'list ghc cached repositories', {isDefault: true})
    .action(function () {
        let ghcMap = loader.loadGhcRepo();
        console.log();
        for (let k in ghcMap) {
            if (ghcMap.hasOwnProperty(k)) {
                console.log(k + ' ' + ghcMap[k]);
                console.log();
            }

        }
    })
    .command('history [url] [branch] [search]', 'retrieve remote git history')
    .action(function (command, url, branch, search) {
        if (typeof branch !== typeof '') {
            branch = '';
        }

        if (typeof search !== typeof '') {
            search = '';
        }

        if (!url) {
            console.log('need specify the repo url');
            return;
        }
        let out = commands.showHistory(url, branch, search);
        console.log(out);
    })
    .command('clear', 'clear ghc cached repositories.')
    .action(function () {

    })
    .parse(process.argv);

