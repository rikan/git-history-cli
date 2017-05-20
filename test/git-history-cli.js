let assert = require('chai').assert;
require('chai').should();
let load = require('../lib/repo-map');
let commands = require('../lib/command').commands;

describe('lib', function () {
    describe('#repo-map', function () {
        it('should return local ghc repo map', function () {
            load();
        })
    });

    describe('#command', function () {
        it('check the git installed', function () {
            assert(commands.checkGitInstalled(), true)
        });

        it('check show log', function () {
            assert(commands.showHistory('https://github.com/tarruda/node-git-remote.git', {branch: 'master'}), true);
            assert(commands.showHistory('https://github.com/tarruda/node-git-remote.git', {
                branch: 'master',
                since: '2015-10-10'
            }), true);
            assert(commands.showHistory('https://github.com/tarruda/node-git-remote.git', {
                branch: 'master',
                number: 13
            }), true);
            assert(commands.showHistory('https://github.com/tarruda/node-git-remote.git', {
                branch: 'master',
                util: '2014-12-12'
            }), true)
        })
    })
});