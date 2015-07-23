 

//http and filesystem modules
var http = require('http'),
fs = require('fs');

//create server
http.createServer(function(req,res){
	
		// 1. write to server and set configuration for response
		res.writeHead(200,{
			'Content-Type':'text/html',
			'Access-Control-Allow-Origin':'*'
		});


		// 2. grab index file using fs filesystem
		var readStream = fs.createReadStream(__dirname + '/index.html');

		// 3. now send it, the index file to our user
		readStream.pipe(res);

}).listen(1337);

console.log("visit at localhost:1337");



