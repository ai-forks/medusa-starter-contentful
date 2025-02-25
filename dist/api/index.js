"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _demo = _interopRequireDefault(require("./demo"));
var _default = function _default(rootDirectory, pluginOptions) {
  var router = (0, _express.Router)();
  (0, _demo["default"])(router);
  return router;
};
exports["default"] = _default;