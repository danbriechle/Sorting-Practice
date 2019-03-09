const assert = require('chai').assert
const bubbleSort = require('../sort')

describe('functionality', function() {
  it('can return a single number', function(){
    const startArray = [1]
    const finishArray = [1]
    assert.deepEqual(bubbleSort(startArray), finishArray)
  })
  it('can sort 5 numbers at an even interval apart', function(){
    // Im a drummer I cant help it :p
    const startArray = [9,6,12,3,0]
    const finishArray = [0,3,6,9,12]
    assert.deepEqual(bubbleSort(startArray), finishArray)
  })
  it('can sort 10 mubers at an uneven interval apart, with duplicates', function() {
    const startArray =  [9,6,5,3,12,3,4,0,2,1,58]
    const finishArray = [0,1,2,3,3,4,5,6,9,12,58]
    assert.deepEqual(bubbleSort(startArray), finishArray)

  })
})
