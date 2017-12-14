
// myArray = [7, 3, 2, 5, 1, 4, 6]

// mergeSort(myArray);

function mergeSort(array) { //breaking our array into two
  var middle = Math.floor((array.length)/2);
  var leftArray = array.slice(0, middle);
  var rightArray = array.slice(middle);
  
  if (array.length === 1) {
    return array 
  }
  return mergeArray(mergeSort(leftArray), mergeSort(rightArray)) 
}

function mergeArray(leftArray, rightArray) { 
  let sorted = [];
  while(leftArray.length || rightArray.length) {
    if(leftArray[0] > rightArray[0] || leftArray[0] === undefined ) {
      sorted.push(rightArray.shift())
    } else {
      sorted.push(leftArray.shift())
    }
  }
  return sorted
}
 

 module.exports = mergeSort;