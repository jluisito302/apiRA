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
var productosSchema = new _mongoose.Schema((_Schema = {
  id: Number,
  excludeFrom: String,
  idGFC: Number,
  item: String,
  codbar: String,
  codigoSecundario: String,
  nombre: String,
  nombreGlobal: String,
  numero_parte: String,
  capacidad: Number,
  precioAuto: Number,
  precioDepar: Number,
  precioMayo: Number,
  precioClub: Number,
  precioOnline: Number,
  precioConveniencia: Number,
  lineTox: String,
  activo: Number,
  chksum: Number,
  actualizado: Number,
  fechaActualizado: String,
  fechaCreacion: String,
  nuevoRegistro: Number,
  catoriginal: Number,
  categoria: String,
  fabricante: String,
  graduacion: String,
  marca: String,
  origen: String,
  paisorigen: String,
  segmento: String,
  subcatego: String,
  submarca: String,
  sabor: String,
  competencia: String,
  presentacion: String,
  colormarca: String,
  colorsabor: String,
  grupo_categoria: String,
  grupo_fabricante: String,
  grupo_graduacion: String,
  grupo_marca: String,
  grupo_origen: String,
  grupo_paisorigen: String,
  grupo_segmento: String,
  grupo_subcatego: String,
  grupo_submarca: String,
  grupo_sabor: String,
  grupo_competencia: String,
  grupo_presentacion: String,
  grupo_colormarca: String,
  grupo_colorsabor: String
}, _defineProperty(_Schema, "capacidad", String), _defineProperty(_Schema, "grupo_capacidad", String), _defineProperty(_Schema, "agrupacion", String), _defineProperty(_Schema, "grupo_agrupacion", String), _defineProperty(_Schema, "coloragrupacion", String), _defineProperty(_Schema, "grupo_coloragrupacion", String), _defineProperty(_Schema, "productopadre", String), _defineProperty(_Schema, "grupo_productopadre", String), _Schema));
var _default = (0, _mongoose.model)('catproductos', productosSchema);
exports["default"] = _default;