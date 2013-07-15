var http = require('http');
var express = require('express');
var fileserver = require('./file-server');

var base = express();

base.use(express.static(__dirname + '/..'));
base.use(express.logger('dev'));
base.use(express.bodyParser());

base.get('/', function (req, res) {
  res.sendfile('index.html');
});

base.use('/fileserver', fileserver(__dirname + '/files'));

http.createServer(base).listen(3000);
