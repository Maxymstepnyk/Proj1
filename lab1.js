 
 var operation = readline();
 var randomshift = parseInt(readline());
 var rotor = [];
 var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 // масив роторов 
 for ( var i = 0; i <3; i++) {
	 var trotos = readline();
	 rotor.push(trotos);
 }
 var massage = readline();
  if (operation=="ENCODE") {
	 var val = '';
	  for (var i =0; i < massage.length; i++) {
		 var position = (a.indexOf(massage[i]+ randomshift+i)%26);
		 val =val + a[position];
	  }
	  massage=val;
	  encode();
 }  else  {
	 decode()
	 var val = '';
	  for (var i =0; i < massage.length; i++) {
		 var pos = (a.indexOf(massage[i]-randomshift-i)%26);
		 while(pos <0) {
			 pos= pos +26;
		 }
		 val = val + a[pos];
	  }
	  massage=val;
 }
 console.log(massage);

 function encode() {
	 for ( var i = 0; i < rotor.length; i++) {
		 massage= encode_a(massage,a, rotor[i]);
	 }
 }
 function decode() {
	 for ( var i = rotor.length-1; i >=0; i--) {
		 massage= encode_a(massage,rotor[i], a);
	 }
 }
 
 function encode_a (m,a0,a1)  {
	   var val = '';
	 for (var i = 0; i < m.length; i++) {
		 const pos = a0.indexOf(m[i]);
		 val += a1[pos];
	   }
	   return val;
 }
 
