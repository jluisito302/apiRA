"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marcasUnicas = exports.findTiendas = exports.findSemanas = exports.findProductos = exports.findPaginate = exports.findAnyEntry = exports.filtro = exports.agruparSemana = exports.agrupadoMarca = exports.agrupadoGrupoSemana = exports.agrupadoCadenaSemana = void 0;
var _concentradovw = _interopRequireDefault(require("../models/concentradovw"));
var _tiendas = _interopRequireDefault(require("../models/tiendas"));
var _productos = _interopRequireDefault(require("../models/productos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var findAnyEntry = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var tasks;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _concentradovw["default"].find();
        case 2:
          tasks = _context.sent;
          res.json(tasks);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function findAnyEntry(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.findAnyEntry = findAnyEntry;
var findPaginate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var entries;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _concentradovw["default"].find().limit(10);
        case 2:
          entries = _context2.sent;
          res.json(entries);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function findPaginate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.findPaginate = findPaginate;
var findSemanas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var semanasArray, querySemanas, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          semanasArray = req.body.semanas;
          _context3.next = 4;
          return _concentradovw["default"].find({
            "semana": {
              $in: semanasArray
            }
          }, {
            semana: 1,
            idTienda: 1,
            idProducto: 1,
            ventasUnidades: 1,
            ventasImporte: 1,
            existenciasUnidades: 1,
            existenciasImporte: 1
          }).limit(1000);
        case 4:
          querySemanas = _context3.sent;
          res.json(querySemanas);
          _context3.next = 12;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          response = {
            "message": "Error la data es incorrecta ..."
          };
          res.json(response);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function findSemanas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.findSemanas = findSemanas;
var findTiendas = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var queryTiendas, response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _tiendas["default"].find().limit(50);
        case 3:
          queryTiendas = _context4.sent;
          res.json(queryTiendas);
          _context4.next = 11;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          response = {
            "message": "Error ...",
            "error": _context4.t0
          };
          res.json(response);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function findTiendas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.findTiendas = findTiendas;
var findProductos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var queryProductos, response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _productos["default"].find().limit(50);
        case 3:
          queryProductos = _context5.sent;
          res.json(queryProductos);
          _context5.next = 12;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          response = {
            "message": "Error ..."
          };
          res.json(response);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function findProductos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.findProductos = findProductos;
var agruparSemana = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var semanasArray, ventasSemana, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          semanasArray = req.body.semanas;
          _context6.next = 4;
          return _concentradovw["default"].aggregate([{
            $match: {
              "semana": {
                $in: semanasArray
              }
            }
          }, {
            $group: {
              _id: "$semana",
              numeroRegistros: {
                $sum: 1
              },
              ventasImporte: {
                $sum: "$ventasImporte"
              },
              ventasUnidades: {
                $sum: "$ventasUnidades"
              },
              existenciasImporte: {
                $sum: "$existenciasImporte"
              },
              existenciasUnidades: {
                $sum: "$existenciasUnidades"
              }
            }
          }]);
        case 4:
          ventasSemana = _context6.sent;
          res.json(ventasSemana);
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          response = {
            "message": "Error encontrado..."
          };
          res.json(response);
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function agruparSemana(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.agruparSemana = agruparSemana;
var agrupadoGrupoSemana = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var semanasArray, idgfcArray, ventasSemanaGrupo, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          semanasArray = req.body.semanas;
          idgfcArray = req.body.idGFC;
          _context7.next = 5;
          return _concentradovw["default"].aggregate([{
            $match: {
              "idGFC": {
                $in: idgfcArray
              },
              "semana": {
                $in: semanasArray
              }
            }
          }, {
            $group: {
              _id: "$idGFC",
              numeroRegistros: {
                $sum: 1
              },
              ventasImporte: {
                $sum: "$ventasImporte"
              },
              ventasUnidades: {
                $sum: "$ventasUnidades"
              },
              existenciasImporte: {
                $sum: "$existenciasImporte"
              },
              existenciasUnidades: {
                $sum: "$existenciasUnidades"
              }
            }
          }]);
        case 5:
          ventasSemanaGrupo = _context7.sent;
          res.json(ventasSemanaGrupo);
          _context7.next = 13;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          response = {
            "message": "Error encontrado..."
          };
          res.json(response);
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function agrupadoGrupoSemana(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.agrupadoGrupoSemana = agrupadoGrupoSemana;
var agrupadoCadenaSemana = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var semanasArray, idgfcArray, ventasSemanaGrupo, response;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          semanasArray = req.body.semanas;
          idgfcArray = req.body.idGFC;
          _context8.next = 5;
          return _concentradovw["default"].aggregate([{
            $match: {
              "idGFC": {
                $in: idgfcArray
              },
              "semana": {
                $in: semanasArray
              }
            }
          }, {
            $group: {
              _id: "$idGFC",
              numeroRegistros: {
                $sum: 1
              },
              ventasImporte: {
                $sum: "$ventasImporte"
              },
              ventasUnidades: {
                $sum: "$ventasUnidades"
              },
              existenciasImporte: {
                $sum: "$existenciasImporte"
              },
              existenciasUnidades: {
                $sum: "$existenciasUnidades"
              }
            }
          }]);
        case 5:
          ventasSemanaGrupo = _context8.sent;
          res.json(ventasSemanaGrupo);
          _context8.next = 13;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          response = {
            "message": "Error encontrado..."
          };
          res.json(response);
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return function agrupadoCadenaSemana(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.agrupadoCadenaSemana = agrupadoCadenaSemana;
var agrupadoMarca = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var semanasArray, groupMarcas, response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          semanasArray = req.body.semanas;
          _context9.next = 4;
          return _concentradovw["default"].aggregate([{
            $match: {
              "semana": {
                $in: semanasArray
              }
            }
          }, {
            $group: {
              _id: "$propet",
              numeroRegistros: {
                $sum: 1
              },
              ventasImporte: {
                $sum: "$ventasImporte"
              },
              ventasUnidades: {
                $sum: "$ventasUnidades"
              },
              existenciasImporte: {
                $sum: "$existenciasImporte"
              },
              existenciasUnidades: {
                $sum: "$existenciasUnidades"
              }
            }
          }]);
        case 4:
          groupMarcas = _context9.sent;
          res.json(groupMarcas);
          _context9.next = 12;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          response = {
            "message": "Error encontrado..."
          };
          res.json(response);
        case 12:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function agrupadoMarca(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.agrupadoMarca = agrupadoMarca;
var marcasUnicas = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var marcas, response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _productos["default"].distinct("marca");
        case 3:
          marcas = _context10.sent;
          res.json(marcas);
          _context10.next = 11;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          response = {
            "message": "Error encontrado... " + _context10.t0
          };
          res.json(response);
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function marcasUnicas(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.marcasUnicas = marcasUnicas;
var ventasTop = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var semanasArray, groupMarcas, response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          semanasArray = req.body.semanas;
          _context11.next = 4;
          return _concentradovw["default"].aggregate([{
            $match: {
              "semana": {
                $in: semanasArray
              }
            }
          }, {
            $group: {
              _id: "$ventasUnidades",
              numeroRegistros: {
                $sum: 1
              },
              ventasImporte: {
                $sum: "$ventasImporte"
              },
              ventasUnidades: {
                $sum: "$ventasUnidades"
              },
              existenciasImporte: {
                $sum: "$existenciasImporte"
              },
              existenciasUnidades: {
                $sum: "$existenciasUnidades"
              }
            }
          }]);
        case 4:
          groupMarcas = _context11.sent;
          res.json(groupMarcas);
          _context11.next = 12;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          response = {
            "message": "Error encontrado... " + _context11.t0
          };
          res.json(response);
        case 12:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return function ventasTop(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var filtro = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var semanasArray, idgfcArray, idArrayProductos, ventasSemanaGrupo, response;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          semanasArray = req.body.semanas;
          idgfcArray = req.body.idGFC;
          idArrayProductos = req.body.idProducto;
          _context12.next = 6;
          return _concentradovw["default"].aggregate([{
            $match: {
              "idGFC": {
                $in: idgfcArray
              },
              "idProducto": {
                $in: idArrayProductos
              },
              "semana": {
                $in: semanasArray
              }
            }
          }, {
            $group: {
              _id: "$idProducto",
              ventasImporte: {
                $sum: "$ventasImporte"
              },
              ventasUnidades: {
                $sum: "$ventasUnidades"
              },
              existenciasImporte: {
                $sum: "$existenciasImporte"
              },
              existenciasUnidades: {
                $sum: "$existenciasUnidades"
              },
              "producto": {
                $first: "$idProducto"
              },
              "semana": {
                $first: "$semana"
              }
            }
          }]);
        case 6:
          ventasSemanaGrupo = _context12.sent;
          res.json(ventasSemanaGrupo);
          _context12.next = 14;
          break;
        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](0);
          response = {
            "message": "Error encontrado..."
          };
          res.json(response);
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 10]]);
  }));
  return function filtro(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.filtro = filtro;