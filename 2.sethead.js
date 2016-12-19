'use strict'
const http = require("http");

http.createServer((req,res)=>{
	/*输出的文本格式*/
	res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
	/*图片格式*/
	// res.writeHead(200,{"Content-type":"image/jpg"});
	// res.writeHead(200,{"Content-Type":"text/text; charset=utf-8"});
	/*同上*/
	// res.setHead("Content-Type"，"text/text; charset=utf-8");	

	res.write("<h1>这是html的h1标题，用来考验一下text／html</h1>")
	res.write("这是一个常规的文本")


	res.end()
}).listen(8080,'127.0.0.1')
