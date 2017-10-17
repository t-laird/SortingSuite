function insertionSort (array) {
  for (let i = 1 ; i < array.length; i++) {
    if (array[i] < array[i-1]){
      if ( array[g] < array[g-1]){
        for (let g = i ; g > 0 ; g--){
          [array[g], array[g-1]] = [array[g-1], array[g]];
        }
      }
    } 
  }
  return array;
}

module.exports = insertionSort;