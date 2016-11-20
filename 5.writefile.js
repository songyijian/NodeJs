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
	writefile :(url,data,fn)=>{	//异步写入
		fs.writeFile(url,data,(err)=>{
			if(err)
				console.log(err)
			else
				fn()
		})  
	},
	writefileSync:(url,data)=>{
		//fs.writeSync(fd, data[, position[, encoding]])
		fs.writeFileSync(url,data,'utf-8')
	}
}


http.createServer((req,res)=>{
	if(req.url !== 'favicon.cio'){
		res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
		console.log('1.主程序运行');

		/*f.writefileSync('./write2.txt','这里是同步写入的内容');
		res.write("（生成）写入成功: ./write2.txt  ");
		res.end('<br/>200')*/

		//异步闭包处理方案 
		f.readFile('./v/txt2.html',(o)=>{	//读取

			//写入
			f.writefile('./write.txt','异步写入:'+o,()=>{
				res.write("（生成）写入成功: ./write.txt  ");
				res.end('<br/>200')
			});

		});
		console.log('3.主程序结束')
	}
}).listen(8080);

