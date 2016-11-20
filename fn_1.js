"use stric"

/*var fun1=()=>{
	return "成功调用了 fun1"
}
var fun2=()=>{
	return "成功调用了 fun2"
}
module.exports={
	fun1:fun1,
	fun2:fun2
}
*/

function OOfn(res){
	this.res=res;
	this.name="我是 oo 制造所以我叫 OOfn";
};
OOfn.prototype.getName=function(){
	this.res.write(this.name)
}


//json
module.exports={
	fn1:(s)=>{ s.write( "<p> 成功调用了 fun1 </p>")},
	OOfn:OOfn
}

