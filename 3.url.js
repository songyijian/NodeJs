'use strict'
const http = require("http");
const url=require('url');

http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});

	//处理二次请求  其实它是在找ico 图标
	if(req.url !=="/favicon.ico"){
		// 该方法把url 才分层一个对象true 会把 query部分也转成一个对象
		let urlj = url.parse(req.url,true)

		console.log(urlj)
		console.log(urlj.pathname)
		console.log(urlj.query)
		
		res.write("输入：http://localhost:8080/search?q=react&page=1&type=collections#asd")
		res.write("</br>node 收到type:"+urlj.query.type)

		res.end()
	}


}).listen(8080,'127.0.0.1')

