"use strict";

var turnOnDebugLogging = true;

var ComponentMds = require("../index.js");
var fido2Helpers = require("fido2-helpers");
var assert = require("chai").assert;

var dummyComponentManager = {
    registerType: function() {},
    getType: function() {},
    register: function() {},
    get: function(name) {
        if (name === "logger") return dummyLogger;
    },
    clear: function() {},
    config: function() {},
    init: function() {},
    shutdown: function() {},
    componentList: new Map(),
    typeList: new Map()
};

var dummyLogger = {
    create: function() {
        return new Proxy(function() {}, {
            get: function() {
                return function(...msg) {
                    if (turnOnDebugLogging) console.log(...msg);
                };
            },
        });
    }
};

describe("mds tests", function() {
    var cc;
    beforeEach(function() {
        cc = new ComponentMds(dummyComponentManager);
    });

    afterEach(function() {
        cc.shutdown();
    });

    it("can be initialized", function() {
        var ret = cc.init();
        assert.isUndefined(ret);
    });
});
