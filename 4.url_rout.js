'use strict'
const http = require("http");
const url = require('url');

//自己处理 路由内容
const router=require('./router');
  
http.createServer((req,res)=>{
	if(req.url !== '/favicon.ico'){
		let urlj=url.parse(req.url,true);
		var pathname=urlj.pathname.substring(1);
		//let route=url.parse(req.url).pathname.replace(/\//,'');//处理路径  .replace(/\//g,'')

		console.log(urlj.pathname)
		console.log('分别输入：rout1,rout2,rout3')

		if(urlj.pathname==='/'){
			pathname='index';
		}

		if(typeof router[pathname] === 'undefined'){
			console.log(0)
			pathname='404';
		}

		//使用路由
		router[pathname](res);
	}

}).listen(8080,'127.0.0.1');