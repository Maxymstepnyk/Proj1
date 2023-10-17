var crypto = require('crypto');


function crack(hash){
  for (var i=0; i < 100000; i++) {
    let pass=i.toString().padStart(5,"0");
    const md5hash = crypto.createHash('md5').update(pass).digest("hex");
    if(md5hash==hash) {
      return pass;
    }
  }
  
}