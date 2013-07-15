module.exports = function (dir) {

  var express = require('express');
  var app = express();

  require('./directories')(app, dir);
  require('./files')(app, dir);

  return app;

};
