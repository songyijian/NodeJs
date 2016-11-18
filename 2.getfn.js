'use strict'
var http = require("http");
var fn=require('./1.fn.js');//引入外部函数
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
	fn0(res);
	fn.fn1(res);
	new fn.OOfn(res).getName();
	res.end()
}).listen(8080,'127.0.0.1')

//本地函数可直接调用
function fn0(res){
	res.write("</br> holl my fn0 ")
};

/*
	module.exports = o //相当于赋值给了window 全局
	require("")	//引入一个外部文件
*/