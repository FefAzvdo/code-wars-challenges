var solution = function(firstArray, secondArray) {
  const diferenceArr = []
  for(i = 0; i < firstArray.length; i++){
    const diference = firstArray[i] - secondArray[i];
    diferenceArr.push(diference);
  }
  
  const diferenceArrPowered = diferenceArr.map(dif => dif*dif);
  const diferenceArrPoweredReduced = diferenceArrPowered.reduce((acc, tot) => acc + tot );
  
  return (diferenceArrPoweredReduced/(firstArray.length))
}