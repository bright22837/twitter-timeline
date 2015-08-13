var http = require('http');
var port = 8080;

http.createServer(function(req, res) {
	res.writeHead(200);
	res.write('Hello, this is dog.'+ new Date());
	res.end();
}).listen(port);

console.info('Listening on port '+ port +', '+ new Date());