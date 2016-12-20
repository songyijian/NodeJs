const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
	if(req.url !=="/favicon.ico"){
		//dir 文件夹
		console.log(1)

		/*fs.mkdir('./mrdir_1',(err)=>{
			console.log(2)
			res.write("./  尝试写入一个文件夹（dir）： mrdir_1")
			if (err) {console.log(err)};
		})*/
		
		fs.rmdir('./mrdir_1',(err)=>{
			console.log(2)
			res.write("  尝试删除 './mrdir_1' 文件夹（dir） ")
			if (err) {console.log(err)};
		})

		console.log(3)
		res.end()
	}
}).listen(8080,"127.0.0.1")

/*
fs.mkdir(path, [mode], [callback(err)])
	path            将创建的目录路径
	mode          目录权限（读写权限），默认0777
	callback      回调，传递异常参数err

fs.rmdir(path, [callback(err)])
	path  目录路径
	callback   回调，回调函数传递一个err异常参数。
*/