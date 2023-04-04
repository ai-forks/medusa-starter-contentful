"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Demo = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _typeorm = require("typeorm");
var _medusa = require("@medusajs/medusa");
var _utils = require("@medusajs/medusa/dist/utils");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Demo = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.Column)({
  type: "varchar"
}), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.BeforeInsert)(), _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2["default"])(Demo, _BaseEntity);
  var _super = _createSuper(Demo);
  function Demo() {
    var _this;
    (0, _classCallCheck2["default"])(this, Demo);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "title", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(Demo, [{
    key: "beforeInsert",
    value: function beforeInsert() {
      this.id = (0, _utils.generateEntityId)(this.id, "demo");
    }
  }]);
  return Demo;
}(_medusa.BaseEntity), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "title", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "beforeInsert", [_dec4, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "beforeInsert"), _class2.prototype)), _class2)) || _class);
exports.Demo = Demo;