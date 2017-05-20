#!/usr/bin/env node

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
    .action(function (command) {
        if (command !== 'list') {
            return;
        }
        let ghcMap = loader.loadGhcRepo();
        console.log();
        for (let k in ghcMap) {
            if (ghcMap.hasOwnProperty(k)) {
                console.log(k + ' ' + ghcMap[k]);
                console.log();
            }
        }
    })
    .option('-t, --text [text]', 'Only show commits with a commit message containing the string')
    .option('-n, --number [number]', 'Show only the last n commits')
    .option('-b, --branch [branch]', 'Show only the branch commits')
    .option('-p, --pretty', 'Show pretty commits')
    .option('-s, --since [since]', 'Limit the commits to those made before the specified date.')
    .option('-u, --until [until]', 'Limit the commits to those made after the specified date.')
    .command('history [url]', 'retrieve remote git history')
    .action(function (command, url) {
        //history https://github.com/tarruda/node-git-remote.git -s '2015-11-12' -p
        if (command !== 'history') {
            return;
        }
        if (!url) {
            console.log('need specify the repo url');
            return;
        }
        let out = commands.showHistory(url, {
            number: program.number,
            pretty: program.pretty,
            text: program.text,
            branch: program.branch,
            until: program.until,
            since: program.since,
        });
        console.log(out);
    })
    .parse(process.argv);

