function quickSort (array) {
  var result = [];
  var firstPivot = array[array.length-1];
  var bigger = [];
  var smaller = [];
  
  for (let i = 0 ; i < array.length - 1 ; i++){
    if (array[i] > firstPivot){
      bigger.push(array[i]);
    } else {
      smaller.push(array[i]);
    }
  }
  
  result.push(smaller, firstPivot, bigger);

  function iterateSort (subArray){
    var resultUpdate = [];
    for (let j = 0 ; j < subArray.length ; j++){
      if (typeof subArray[j] === 'object' && subArray[j].length > 1){
        var firstP = subArray[j][subArray[j].length-1];
        var iBig = [];
        var iSmall = [];
        for (let i = 0 ; i < subArray[j].length - 1 ; i++){
          if (subArray[j][i] > firstP){
            iBig.push(subArray[j][i]);
          } else {
            iSmall.push(subArray[j][i]);
          }
        }
        if (iBig.length === 1){
          iBig = iBig[0];
        }
        if (iSmall.length ===1){
          iSmall = iSmall[0];
        }
        
        if (iBig.length === 0){
          resultUpdate.push(iSmall,firstP);
        } else if (iSmall.length === 0){
          resultUpdate.push(firstP,iBig);
        } else {
        resultUpdate.push(iSmall,firstP,iBig);
        }
        
      }else if (subArray[j].length === 1){
        resultUpdate.push(subArray[j][0]);
      } else if (subArray[j].length === 0){
        
      } else{
        resultUpdate.push(subArray[j]);
      }
    }  
           
    result = resultUpdate;   
    
    if (result.length < array.length){
      return iterateSort(result);
    } else {
      return result;
    }
  }
  
  return iterateSort(result);
  
}

module.exports = quickSort;