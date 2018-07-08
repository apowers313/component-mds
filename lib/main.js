"use strict";

var Component = require("component-class");
var fs = require("fs");
var log;

module.exports = class ComponentMds extends Component {
    constructor(cm) {
        super(cm);

        this.addDependency("logger");
    }

    init() {
        var logger = this.cm.get("logger");
        if (logger === undefined) {
            throw new Error("logger component not found");
        }
        log = logger.create("ComponentMds");
    }
};
