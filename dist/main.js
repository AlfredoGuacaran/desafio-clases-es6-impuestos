"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuesto["default"](4000000, 2000000);
var cliente1 = new _cliente["default"]('Alfredo', impuesto1);
console.log(cliente1);
console.log(cliente1.calcularImpuesto());