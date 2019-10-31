function digPow(n, p){

  //n = 695
  const string = n.toString();                 //string = '695' 
  const spreaded = [...string];                //spreaded = ['6', '9', '5']
  const numberSpreaded = []
  
  for(i=0; i<spreaded.length; i++){
    let element = parseInt(spreaded[i])
    numberSpreaded.push(element)               //numberSpreaded = [6, 9, 5]
  }
  
  
  console.log('n inicial', n)
  console.log('p inicial', p)
  
  const poweredElements = []
  for(i=0; i<numberSpreaded.length;i++){
    poweredElements[i] = Math.pow(numberSpreaded[i], p);
    p++
  }
  
  const reducedPoweredElements = poweredElements.reduce((acc, tot)=> {return acc + tot}, 0)
  
  let k = -1
  
  for(i=0; i <= n*p; i++){
    if(i * n == reducedPoweredElements)
      k = i;
  }
  
  console.log('n*p',n*p)  //sempre será maior
  
  
  return k

}