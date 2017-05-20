let assert = require('chai').assert;
let expect = require('chai').expect;
require('chai').should();
let load = require('../lib/repo-map');
let commands = require('../lib/command').commands

describe('lib', function () {
    describe('#repo-map', function () {
        it('should return local ghc repo map', function () {
            load();
        })
    });

    describe('#command', function () {
        it('check the git installed', function () {
            assert(commands.checkGitInstalled(), true)
        })
    })
});