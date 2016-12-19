'use stinct';
module.exports={
	index:(res)=>{
		console.log(111)
		res.end("‘／’ 默认 index ")
	},
	"404":(res)=>{
		res.end("没有找到该路径下的内容 404")
	},
	rout1:(res)=>{
		res.write('<br/> my rout1 text!!')
		res.end()
	},
	rout2:(res)=>{
		res.write('<br/> my rout2 text!!')
		res.end()
	},
	rout3:(res)=>{
		res.write('<br/> my rout3 text!!')
		res.end()
	}
}


/*module.exports={
	fn1:(s)=>{ s.write( "<p> 成功调用了 fun1 </p>")},
	OOfn:OOfn
}*/