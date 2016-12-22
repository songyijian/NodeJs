'use strict';
const http = require("http");
const url = require("url");
const querystring=require("querystring");

http.createServer((req,res)=>{
	if(req.url !== './favicon.ico' ){
		//console.log(req.url)
		if( req.url === "/dopost/" && req.method.toLowerCase() == "post"){

			console.log("post yes")
			
			let getData = "";
			req.addListener('data',(chunk)=>{
				getData += chunk;
			})
			req.addListener("end",()=>{
				res.end(getData.toString());

				console.log(querystring.parse( getData.toString() ))
			})
		}
	}
}).listen(8080,"127.0.0.1")