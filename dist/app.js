"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = _interopRequireDefault(require("./config"));
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes/routes.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

//PORT
app.set('port', _config["default"].apiPort);

//MIDDLEWARE
var corsOptions = {};
app.use((0, _cors["default"])());
//app.use(morgan('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

//ROUTE GET DEFAULT
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to my application'
  });
});
app.use('/api', _routes["default"]);
var _default = app;
exports["default"] = _default;