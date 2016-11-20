'use stinct';
module.exports={
	rout1:(res)=>{
		res.write('<br/> my rout1 text!!')
	},
	rout2:(res)=>{
		res.write('<br/> my rout2 text!!')
	},
	rout3:(res)=>{
		res.write('<br/> my rout3 text!!')
	}
}


/*module.exports={
	fn1:(s)=>{ s.write( "<p> 成功调用了 fun1 </p>")},
	OOfn:OOfn
}*/