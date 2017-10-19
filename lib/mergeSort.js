function mergeSort (array) {
  let pivot = Math.floor(array.length / 2);
  let a = array.slice(0,pivot);
  let b = array.slice(pivot, array.length);
  
  if (array.length <= 1){
    return array;
  }
  
  return merge(mergeSort(a),mergeSort(b));
}

function merge (a, b){
  let result = [];
  
  while (a.length && b.length){
    if (a[0] >= b[0]){
      result.push(b.shift());
    } else {
      result.push(a.shift());
    }
  }
  
  while (a.length){
    result.push(a.shift());
  }
  while (b.length){
    result.push(b.shift());
  }
  
  return result;
}

  module.exports = mergeSort;