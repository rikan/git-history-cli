let assert = require('chai').assert;
let expect = require('chai').expect;
require('chai').should();
let {load} = require('../lib/repo-map');

describe('lib', function () {
    describe('#repo-map', function () {
        it('should return local ghc repo map', function () {
            load();
        })
    })
});