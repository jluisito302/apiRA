"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _Schema;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var concentradovwSchema = new _mongoose.Schema((_Schema = {
  id: Number,
  idProductoMongo: Object,
  idTiendaMongo: Object,
  origenData: String,
  idGFC: Number,
  idTienda: Number,
  idCodigoTienda: Number,
  chksumt: Number,
  idProducto: Number,
  idCodigoProducto: Number,
  chksump: Number,
  ventasUnidades: Number,
  ventasImporte: Number,
  pzasCaja: Number,
  cajasFisicas: Number,
  cajasFisicasOH: Number,
  cajasVirt: Number,
  cajasVirtOH: Number,
  serv_lvl: Number,
  existenciasUnidades: Number,
  existenciasImporte: Number,
  existenciasImporteEVO: Number,
  existenciasTransito: Number,
  existenciasTransitoImporte: Number,
  existenciasWH: Number,
  existenciasWHImporte: Number,
  existenciasOOUnidades: Number,
  existenciasOOImporte: Number,
  existenciasTotal: Number,
  existenciasTotalImporte: Number,
  distr_num: Number,
  distr_pond: Number,
  precio_prom: Number,
  prom_vta_t: Number,
  priceToday: Number,
  semana: Number,
  semanaCliente: Number,
  real_month: Number,
  real_year: Number,
  custom_month: Number,
  custom_year: Number,
  fechaCarga: String,
  idPromotor: Number,
  ticket: String,
  idGFCOrigen: Number
}, _defineProperty(_Schema, "idCodigoTienda", Number), _defineProperty(_Schema, "calculado", Number), _defineProperty(_Schema, "visible", Number), _defineProperty(_Schema, "publico", Number), _defineProperty(_Schema, "revision", Number), _defineProperty(_Schema, "keywork", String), _defineProperty(_Schema, "order_book_flag", String), _defineProperty(_Schema, "item_status", String), _defineProperty(_Schema, "item_type", String), _defineProperty(_Schema, "Curr_Traited_Store", String), _defineProperty(_Schema, "Curr_Valid_Store", String), _defineProperty(_Schema, "propet", String), _defineProperty(_Schema, "propetnum", Number), _defineProperty(_Schema, "activocatprod", Number), _defineProperty(_Schema, "estatusprodorigen", String), _defineProperty(_Schema, "estatusprodtraduccion", String), _Schema));
var _default = (0, _mongoose.model)('concentradovwids', concentradovwSchema);
exports["default"] = _default;