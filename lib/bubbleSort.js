function bubbleSort (array) {
  for (let e = 0 ; e < array.length ; e++){
    let currentArray = array;
    let counter = 0;
    for (let i = 0 ; i < array.length ; i++){
      if (array[i] > array[i+1]){
          [array[i],array[i+1]] = [array[i+1],array[i]];
          counter++;
      }
    }
    if (counter === 0){
      return array;
    }
  }
  return array;
}



module.exports = bubbleSort;