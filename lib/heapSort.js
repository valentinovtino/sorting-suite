// myArray = [1, 15, 2, 12, 13, 6, 4, 7, 20, 18]

function buildMaxHeap(array) {
  let lastParent = Math.floor(array.length/2)
  
  for (let i = lastParent; i >= 0; i--) {
      let parent = array[i];
      let leftChild = array[2 * i + 1];
      let rightChild = array[2 * i + 2];
      
      if (parent < leftChild && leftChild > rightChild) {
        [array[i], array[2 * i + 1]] = [array[2 * i + 1], array[i]]
      } else if (parent < leftChild && !rightChild) {
        [array[i], array[2 * i + 1]] = [array[2 * i + 1], array[i]]
      } else if (parent < rightChild){
        [array[i], array[2 * i + 2]] = [array[2 * i + 2], array[i]]
      }      
    }
  return array;
}

function heapSort(array) {
  let length = array.length
  let sorted = [];

  for (let i = Math.floor(array.length/2); i >= 0; i--) {
    buildMaxHeap(array);
  }
  
  while (length) {
    let thing2 = array.shift();
    sorted.unshift(thing2);
    length--;
    buildMaxHeap(array)
  }
  
  array.push(...sorted)
  
  return sorted;
}

// let thing = heapSort(myArray)


// console.log(myArray)



 module.exports = heapSort;