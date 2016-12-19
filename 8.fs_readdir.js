'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');//读写文件模块


http.createServer((req,res)=>{
	if(req.url !== 'favicon.cio'){
		res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
		
		console.log(1);
		//fs.readdir('./',(err,files)=>{
		fs.readdir(__dirname,(err,files)=>{		
			if(err){
				console.log(err);
				return;
			}

			console.log(files)
			console.log(2)

			let dir_file = [],
				file = [];

			/*files.forEach((item,index)=>{
				res.write(  index +" : "+ item +'</br>')
				fs.stat(item,(err,stattype)=>{

					if(stattype.isFile()){
						file.push(item+'</br>')
					}

					if(stattype.isDirectory()){
						dir_file.push(item)
					}

				})
			})*/

			console.log(dir_file)
			console.log(file)


			for (let i = files.length - 1; i >= 0; i--) {

				fs.stat(files[i],(err,stattype)=>{
					if(stattype.isFile()){
						file.push(files[i]+'</br>')
					}
					if(stattype.isDirectory()){
						dir_file.push(files[i])
					}
				})
				
				//res.write( files[i]+'</br>')
			}


			res.end()
		})

		console.log(3)
	}
}).listen(8080);


/*

*/
