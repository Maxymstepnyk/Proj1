XOR = (msg1,msg2)=>
{
	var result = '';
	for(var i=0; i<msg1.length; i++)
		result += (parseInt(msg1[i], 16) ^ parseInt(msg2[i], 16)).toString(16)
	return result;
}
console.log(XOR(XOR(readline(),readline()),readline()).replace(/../g, x=>String.fromCharCode(parseInt(x,16))))