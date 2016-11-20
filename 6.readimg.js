'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');//读写文件模块
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
	},
	readImg :(url,fn)=>{
		fs.readFile(url,'binary',(err,data)=>{
			if(err)
				console.log(err);
			else
				fn( data)
		})
	},
	writefile :(url,data,fn)=>{	//异步写入
		fs.writeFile(url,data,(err)=>{
			if(err)
				console.log(err)
			else
				fn()
		})  
	},
	writefileSync:(url,data)=>{//同步写入
		fs.writeFileSync(url,data,'utf-8')
	}
};


http.createServer((req,res)=>{
	if(req.url !== 'favicon.cio'){
		//这是输出图片的格式 很重要
		res.writeHead(200,{"Content-Type":"image/jpeg"});

		f.readImg('./img/1.jpg',(o)=>{
			res.write(o,'binary');
			res.end();
		});

		console.log('3.主程序结束')
	}
}).listen(8080);

