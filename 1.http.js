'use strict'
var http = require("http");
http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    console.log('http://localhost:8080/')
    response.end('hello world')
}).listen(8080,'127.0.0.1')

//server.listen(8080,'127.0.0.1')    //端口
/*
接下来，打开浏览器访问http://localhost:8080/，看到写着“Hello World”的网页。
第一行请求（require）Node.js自带的 http 模块
调用http模块提供的函数： createServer 。这个函数会返回一个对象，
这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
*/