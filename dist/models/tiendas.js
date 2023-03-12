"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var tiendasSchema = new _mongoose.Schema({
  id: Number,
  excludeFrom: String,
  idTiendaReal: String,
  tdaCte: String,
  Nombre: String,
  nombreAnterior: String,
  idPortal: Number,
  idGFC: Number,
  direccion: String,
  determinanteGSP: String,
  chksum: Number,
  nuevoregistro: Number,
  activo: Number,
  keyWord: String,
  fechaCreacion: String,
  fechaActualizado: String,
  estadoPortal: String,
  ciudadPortal: String,
  zipcodePortal: String,
  street_addressPortal: String,
  building_addressPortal: String,
  codigoCliente: String,
  origenData: String,
  idregion: String,
  idestado: String,
  idciudad: String,
  idgerente: String,
  idsupervisor: String,
  idpromotor: String,
  idformato: String,
  idcobertura: String,
  idtemporada: String,
  idarea: String,
  areanielsen: String,
  competencia: String,
  tipoventa: String,
  region: String,
  grupo_region: String
});
var _default = (0, _mongoose.model)('cattiendas', tiendasSchema);
exports["default"] = _default;