var http = require('http');
var PORT = 7000;

var server = http.createServer(function(req,res) {
	console.log(req.url);

	res.writeHead(200, {
		'content-Type': 'text/html'
	});


	var body = '<u><b>You Smell GOOD!</b> </u>';

res.end('body');


});


server.listen(PORT, function() {
	console.log('Server Listening on %d ', PORT);
});