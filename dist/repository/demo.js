"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DemoRepository = void 0;
var _demo = require("../models/demo");
var _database = require("@medusajs/medusa/dist/loaders/database");
console.info("create responseotry demo============");
var DemoRepository = _database.dataSource.getRepository(_demo.Demo).extend({
  customFunction: function customFunction() {
    // TODO add custom implementation
    return;
  }
});
exports.DemoRepository = DemoRepository;
var _default = DemoRepository;
exports["default"] = _default;