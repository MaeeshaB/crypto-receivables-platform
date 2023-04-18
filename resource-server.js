var http = require('http');
var nodeStatic = require('node-static')
var fileServer = new nodeStatic.Server('./res')

http.createServer(function (req, res) {
  fileServer.serve(req, res);
}).listen(5001);
