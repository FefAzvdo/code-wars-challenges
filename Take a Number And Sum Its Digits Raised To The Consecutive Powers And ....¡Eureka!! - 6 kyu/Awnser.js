function sumDigPow(a, b) {

  const fullArr = []
  
  for (i = a; i <= b; i ++){
    fullArr.push(i)
  };
  
   const separatedNumberArray = fullArr.map( (el) => {
     return (
       Array.from(String(el), Number)
     )
   });
 
 const arrayPow = []
 separatedNumberArray.map((item, key) => 
         { 
            
            item.map((sub, subkey) => {
              item[subkey] = Math.pow(sub, subkey + 1)
            });
            
            let itemElevado = item.reduce((acc, cur) => acc + cur)
            arrayPow.push(itemElevado)
          }
  )
  
  const awnserArr = []
  
  for(i=0; i < fullArr.length; i++){
    if(arrayPow[i] == fullArr[i]){
      awnserArr.push(arrayPow[i])
    }
  }
   
   return awnserArr
  }
  