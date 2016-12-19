'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');//读写文件模块


http.createServer((req,res)=>{
	if(req.url !== 'favicon.cio'){
		res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
		
		console.log(1);
		fs.writeFile('./m/write_1.txt',"node write add_txt",(err)=>{
			if(err){
				console.log(err);
			}
			console.log(2)

			res.end("./m/write_1.txt 已经写入内容")
		})

		/*f.writefileSync('./write2.txt','这里是同步写入的内容');
		res.write("（生成）写入成功: ./write2.txt  ");
		res.end('<br/>200')*/

		//异步闭包处理方案 
		/*f.readFile('./v/txt2.html',(o)=>{	//读取

			//写入
			f.writefile('./write.txt','异步写入:'+o,()=>{
				res.write("（生成）写入成功: ./write.txt  ");
				res.end('<br/>200')
			});

		});*/
		console.log(3)
	}
}).listen(8080);


/*
fs.writeFile(filename, data, [options], [callback(err)])
由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
接收参数：
filename      (String)            文件名称
data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
options        (Object)           option数组对象，包含：
· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
· mode         (Number)        文件读写权限，默认值 438
· flag            (String)            默认值 ‘w'
callback {Function}  回调，传递一个异常参数err。
*/
