'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
const path= require('path');


http.createServer((req,res)=>{
	if(req.url !== '/favicon.ico'){
		console.log(1);
		
		let urlj = url.parse(req.url,true);
		let pathname = urlj.pathname;
		let extname = path.extname(urlj.pathname)
		let contentTypeJosn={};
		
		if(pathname ==='/'){
			pathname = 'index.html';
		}
		
		//编码头处理
		fs.readFile('./mime.json',(err,data)=>{
			if(err){console.log(err); return;}
			res.writeHead(200,{"Content-type":"application/json;charset=UTF-8"});
			contentTypeJosn = data;
			main()
		})
		
		const main = ()=>{
			fs.readFile('./v/'+pathname,(err,data)=>{
				if(err){
					console.log(err);
					fs.readFile('./v/404.html',(err,data)=>{
						res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
						res.end(data);
					})
					return;
				}
	
				res.writeHead(200,{"Content-type":'"'+contentTypeJosn[extname]+'";charset=UTF-8"'});
				res.end(data)
	
				console.log(2);
			})
		}
		

		/*if(typeof router[pathname] === 'undefined'){
			pathname='404';
		}*/

		console.log(3)
	}
}).listen(8080,"127.0.0.1");

