var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('hello World\n');
}).listen(1337, '127.0.0.1');