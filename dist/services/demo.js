"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _medusa = require("@medusajs/medusa");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DemoService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(DemoService, _TransactionBaseServi);
  var _super = _createSuper(DemoService);
  function DemoService(container) {
    var _this;
    (0, _classCallCheck2["default"])(this, DemoService);
    _this = _super.call(this, container);
    //console.info("container", Object.keys(container));
    _this.productService = container.productService;
    //this.demoRepository = container.demoRepository;
    return _this;
  }
  (0, _createClass2["default"])(DemoService, [{
    key: "getMessage",
    value: function () {
      var _getMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var count;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.productService.count();
            case 2:
              count = _context.sent;
              return _context.abrupt("return", "Welcome to My Store! count=[".concat(count, "][]"));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getMessage() {
        return _getMessage.apply(this, arguments);
      }
      return getMessage;
    }()
  }]);
  return DemoService;
}(_medusa.TransactionBaseService);
var _default = DemoService;
exports["default"] = _default;