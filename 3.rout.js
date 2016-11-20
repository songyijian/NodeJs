'use strict'
var http = require("http");
var url = require('url');

var routerFn=require('./router');

http.createServer((req,res)=>{
	if(req.url !== "/favicon.ico"){//处理二次提交
		let route=url.parse(req.url).pathname.replace(/\//,'');//处理路径  .replace(/\//g,'')
		let keyvalue=url.parse(req.url).query;//处理路径传参
		routerFn[route](res);

		console.log('路径：' +route)
		console.log('url参数：' +keyvalue)
		console.log('请求方式：' + req.method)//返回请求方式默认是GET

	    res.end()
	}
}).listen(8080,'127.0.0.1');