'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');//读写文件模块


http.createServer((req,res)=>{
	if(req.url !== '/favicon.ico'){
		res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
		console.log(1);
		
		//fs.readdir('./',(err,files)=>{
		fs.readdir(__dirname,(err,files)=>{		
			if(err){
				console.log(err);
				return;
			}
			console.log(2)

			let aDir_file = [], aFile = [];
			/*files.forEach((item,index)=>{
				//res.write(  index +" : "+ item +'</br>')
				fs.stat(item,(err,stattype)=>{
					if(stattype.isFile()){
						aFile.push(item+'</br>')
					}
					if(stattype.isDirectory()){
						aDir_file.push(item)
					}
				})
			})*/
			//递归 异步处理方法
			( function statfn(i){
				if(i > files.length-1){
					//console.log(aDir_file)
					//console.log(aFile)
					res.write("<h1>readdir当前目录（__dirname）：</h1></br>"+ JSON.stringify(files,null, '<br>'))
					res.write("<h2>文件夹：</h2></br>"+ aDir_file.toString())
					res.write("<h2>文件：</h2></br>"+ aFile.toString())
					res.end()
					return;
				}
				
				fs.stat(files[i],(err,stattype)=>{
					if(stattype.isFile()){
						aFile.push(files[i]+'</br>')
					}
					if(stattype.isDirectory()){
						aDir_file.push(files[i]+'</br>')
					}
					console.log("stat file "+i)
					statfn(i+1)
				})
			})(0);
		})
		
		console.log(3)
	}
}).listen(8080);


/*
fs.readdir()
	使用fs.readdir读取目录，重点其回调函数中files对象//fs.readdir(path, callback);
	path, 要读取目录的完整路径及目录名；
	[callback(err, files)], 读完目录回调函数；err错误对象，files数组，存放读取到的目录中的所有文件名
	
fs.stat(path, callback);//fs.lstat(path, callback); //查看符号链接文件
	path, 要查看目录/文件的完整路径及名；
	[callback(err, stats)], 操作完成回调函数；err错误对象，stat fs.Stat一个对象实例，提供如:isFile, isDirectory,isBlockDevice等方法及size,ctime,mtime等属性
	//实例，查看fs.readdir	
*/
