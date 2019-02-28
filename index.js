var http = require('http');
var fs = require('fs');
var server = http.createServer(function(requets,response){
	fs.readFile("index.html", function(err, data){
	  response.writeHead(200, {'Content-Type': 'text/html'});
	  response.write(data);
	  response.end();
	});
});

server.listen(8000,function(){
	console.log('Server is listening at 8000');
});