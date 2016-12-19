'use strict'
const http = require("http");
const fs=require("fs");

http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
	//console.log(req.url)
	
	if (req.url !== '/favicon.ico') {
		console.log(1)

		//异步 读取
		fs.readFile("./m/m1.html",function(err,data){
			// 错误信息
			if (err) {
				console.log(err);
				return ;
			}
			console.log(2)
			res.end(data)
		})

		//用步方法： readFileSync(url,"编码") 返回内容
		/*let conmet = fs.readFileSync("./m/m1.html",'utf-8');
		console.log(2)
		res.end(conmet);*/

		console.log(3)
	}

}).listen(8080,'127.0.0.1');