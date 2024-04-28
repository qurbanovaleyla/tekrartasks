

// for (let i = 1; i <=10; i++) {
//    for (let j = 1; j <=10; j++) {
      
//       console.log(i+"x"+j+"="+ (i*j));
//    }
   
// }



// daxil edilen ededin sade eded olub olmamasini tapin

let num= parseInt(prompt("eded daxil edin"))
// let result=true
for (let i = 2; i<= num/2; i++) {
   if(num%i==0){
// alert("murekeb")
// break
//    }else{
//       alert("sade")
//    }
   if(num%i==0 ){
     
      result= false
     
   }
  }  
  break

if(result){
   alert(num +"sade")
}
else{
   alert(num +"murekkeb")
}
}