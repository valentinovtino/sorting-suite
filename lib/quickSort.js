function quickSort(array) {
  let pivot = array[array.length-1]
  let lesser = [];
  let greater = [];
  
  if(array.length <= 1) {
    return array;
  }
  
  for(let i = array.length-2; i >= 0; i--){
    if (pivot < array[i]) {
      greater.push(array[i])
    } else {
      lesser.push(array[i])
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater))
}



module.exports = quickSort;