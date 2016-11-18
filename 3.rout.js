'use strict'
var http = require("http");
var url = require('url');

http.createServer((req,res)=>{
	if(req.url !== "/favicon.ico"){//处理二次提交
		let rout=url.parse(req.url).pathname;//处理路径
		let keyvalue=url.parse(req.url).query;//处理路径传参
		
		console.log(rout)
		console.log(keyvalue)
		console.log(req.method)//返回请求方式默认是GET

	    res.end()
	}
}).listen(8080,'127.0.0.1');