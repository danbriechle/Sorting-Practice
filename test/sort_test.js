const assert = require('chai').assert
const sort = require('../sort')

describe('functionality', function() {
  it('it can return a single number', function(){
    const startArray = [1]
    const finishArray = [1]
    assert.deepEqual(bubbleSort(startArray), finishArray)
  })
})
