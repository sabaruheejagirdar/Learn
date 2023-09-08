// ARRAYS

function basicArray(){
    const array1 = new Array(5);
    console.log(array1.fill(0))

    array1[0] = 100
    array1[3] = 300

    console.log(array1)
    console.log(array1.includes(100));
    console.log(array1.indexOf(300))
    console.log(array1.lastIndexOf(0))

    // Push/pop and Shift/Unshift

    array2 = [2,4,6,8,10]
    array2.push(12,14) // 2,4,6,8,10,12,14
    console.log(array2)
    array2.pop() // 2,4,6,8,10,12
    console.log(array2)
    array2.unshift(1) // 1,2,4,6,8,10,12,14
    console.log(array2)
    array2.shift() // 2,4,6,8,10,12,14 -- removed 1
    console.log(array2)
}

// basicArray()

// ***************splice and slice **********************
// Splice is inplace is used to replace elements in array
function splicing() {
    const arr1 = [1,2,3,4,5,6,7,8]
    arr1.splice(1,3)
    console.log(arr1)
    // Slice: not inplace
    const arr2 = [11,12,13,14,15,16,17,18]
    slicedArray = arr2.slice(2,5)
    console.log(slicedArray)
    
    const concatArr = arr2.concat(arr1)
    console.log(concatArr)
    
    arr1.reverse() //Inplace
    console.log(arr1)
    
    joinedArr = arr1.join('|') //Not In place
    console.log(joinedArr) 
    // console.log(typeof arr1)
  }
  
//   splicing()
  
  
  // *************Iterating through the loop******************************
  function iterating() {
    
    const  arr3 = [7,8,9,12]
    
    arr3.forEach(function(value, index){
    console.log("HI",value, index, this);
    }, {num: 500})
  
    // MAP
    const mappedArray = arr3.map(function(value, index){
      return value + 10
    })
    console.log("MappedArray: ",mappedArray)
  
    // FILTER
    const filteredArray = arr3.filter(function(value, index){
      return value > 8
    })
    console.log("Filtered Array",filteredArray)
  
    // FIND
    const foundElement = arr3.find(function(value, index){
      return value > 8
    })
    console.log("Found: ",foundElement)
  
    // FINDIndex
    const foundIndex = arr3.findIndex(function(value, index){
      return value > 8
    })
    console.log("FoundIndex: ",foundIndex)
  
    // If EVERYTHING passes
    const everyPasses = arr3.every(function(value, index){
      return value > 8
    })
    console.log("EveryOnePasses: ",everyPasses)
  
    // If SOMETHING passes
    const somePasses = arr3.some(function(value, index){
      return value > 8
    })
    console.log("SomeOnePasses: ",somePasses)
    
  }
  // iterating()
  
  // ***************REDUCE****************************
  function reduce() {
    const arr4 = [23,5,8,10]
    var i = 0
    const sum = arr4.reduce(function(accumulator, currValue){
      // Accumulator: Previous returned value
      console.log(i)
      console.log("Accumulator: ", accumulator)
      console.log("CurrentValue: ", currValue)
      i++
      return accumulator + currValue
    },0);
    console.log("Sum: ",sum)
  }
  
  // reduce()
  
  // **************SORTING ARRAYS*****************************
  function sortingArrays() {
    const  arr5 = [7,6,888,1,74,99]
    arr5.sort() //Inplace
    // console.log(arr5)
  
    const arr6 = [1,9,16,2]
    arr6.sort(comparingNumbers);
  
    function comparingNumbers(firtsNumber, secNumber) {
      console.log(firtsNumber, secNumber)
      if (firtsNumber === 3){
        return -1;
      }
      if (secNumber ===3){
        return 1;
      }
      return firtsNumber - secNumber
    }
    // console.log("Final: ",arr6)
    // console.log("OUT: ",output)
  }
  sortingArrays()