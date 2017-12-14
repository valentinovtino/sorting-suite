const assert = require('chai').assert;
const insertionSort = require('../lib/insertionSort.js');
const generateRandomNumbers = require('../lib/randomArray.js');

describe('insertionSort', function() {
  let array;
  beforeEach(() => {
    array = [9, 6, 3, 4, 8, 7, 2, 5];
  })

  it('should be a function', function() {
    assert.isFunction(insertionSort)
  })

  it('should have an array', function() {
    assert(Array.isArray(array));
  })

  it('should sort an array of numbers', function() {
    insertionSort(array)
    assert.deepEqual(insertionSort(array), [2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should sort negative numbers', function() {
    let array = [-3, -6, -2, -1, -7];
 
    assert.deepEqual(insertionSort(array), [-7, -6, -3, -2, -1])
  })

  it('should sort a very large random array', function() {
      let random = generateRandomNumbers(3001, 3000) 
      let sortedArray = insertionSort(random);
  
      for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  })
})
