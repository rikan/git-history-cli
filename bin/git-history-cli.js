#!/usr/bin/env node

let exec = require('child_process').exec;
let constants = require('../lib/constants');

let loader = require('../lib/repo-map');

// let cmd, prefix = 'ghc-';
// cmd = 'git version';
// exec(constants.COMMAND_GIT_VERSION, function (error, stdout, stderr) {
//     if (error !== null) {
//         console.error('Hi, please make sure git is installed and try again.');
//         process.exit(1);
//     }
// });
//
// let _makeRepoMap = function () {
//     var map = {};
//     exec(constants.COMMAND_GIT_REMOTES, function (error, stdout, stderr) {
//         console.log()
//     });
// };
//
// let program = require('commander');
// let version = require("../package.json").version;
// program
//     .version(version)
//     .command('list', 'list ghc cached repositories', {isDefault: true})
//     .action(function () {
//         cmd = 'git remote -v';
//         exec(cmd, function (error, stdout, stderr) {
//             console.log(stdout)
//         });
//     })
//     .command('history [remote] [short-name]', 'list cached installed', {isDefault: true})
//     .action(function () {
//         cmd = 'git remote -v';
//         exec(cmd, function (error, stdout, stderr) {
//             console.log(stdout)
//         });
//     })
//     .command('clear', 'clear ghc cached repositories.', {isDefault: true})
//     .action(function () {
//         cmd = 'git remote -v';
//         exec(cmd, function (error, stdout, stderr) {
//             console.log(stdout)
//         });
//     })
//     .parse(process.argv);

