'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');
var f={
	readFileSync :(url)=>{	//同步 读取
		var data = fs.readFileSync(url,'utf-8');
		return data;
	},
	readFile :(url,fn)=>{	//异步 读取
		fs.readFile(url,(err,data)=>{
			if(err)
				console.log(err);
			else
				fn( data.toString() )
		})
	}
};


http.createServer((req,res)=>{
	if(req.url !== 'favicon.cio'){
		console.log('1.主程序运行');

		//同步
		/*res.write(f.readFileSync('./v/login.html'))
		res.end('200')*/

		//异步闭包处理方案
		f.readFile('./v/txt2.html',(o)=>{
			res.write(o);
			res.end('200')
		});
		console.log('3.主程序结束')
	}
}).listen(8080);

