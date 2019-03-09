//names the function
function bubbleSort(numbersArray) {
  //sets up the loop
  do {
    //sets sorted to false to begin
    var sorted = false;
    for(var i = 0; i < numbersArray.length - 1; i++) {
      //sets the condition for which they will swap
      if (numbersArray[i] > numbersArray[i+1]) {
        //holds the first elemnent in a temp variable
        var temp = numbersArray[i];
        // swaps indexs
        numbersArray[i] = numbersArray[i+1];
        // swaps indexs
        numbersArray[i+1] = temp;
        // sets the var again so sorting can continue
        sorted = true;
      }
    }
  }
  while(sorted === true);
  //returns the sorted array
  return numbersArray
}

module.exports = bubbleSort
