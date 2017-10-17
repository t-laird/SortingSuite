function mergeSort (array) {
  var startingArrSize = 1;
  var sortingArray = [];
  for (var i=0 ; i < array.length ; i+= 2){
    if (array[i+1] !== undefined) {
    sortingArray.push([array[i],array[i+1]]);
    } else {
      sortingArray.push([array[i]]);
    }
  }
  
  for (var e=0 ; e < sortingArray.length ; e++){
    if (sortingArray[e][0] > sortingArray[e][1]){
      [sortingArray[e][0], sortingArray[e][1]] = [sortingArray[e][1],sortingArray[e][0]];
    }
  }
  
  function joinSorts (passedArray) {
    var sortedIteration = [];
    var tempJoin;
    for (var j=0 ; j < passedArray.length ; j+= 2){
      if (passedArray[j+1] !== undefined){
        tempJoin = passedArray[j].concat(passedArray[j+1]);
      } else {
        tempJoin = passedArray[j];
      }
      for (let k = 0 ; k < tempJoin.length ; k++){
        for (let l = 0 ; l < tempJoin.length ; l++){
          if (tempJoin[l] > tempJoin[l+1]){
            [tempJoin[l],tempJoin[l+1]] = [tempJoin[l+1],tempJoin[l]];
          }
        }
      }
      sortedIteration.push(tempJoin);
    }
    
    if (sortedIteration.length === 1){
      return sortedIteration[0];
    } else if (sortedIteration.length > 1){
      return joinSorts(sortedIteration);
    }
  }
  
  var result = joinSorts(sortingArray);
  
  return result;
}

  module.exports = mergeSort;