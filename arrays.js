var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray (array, entry) {
  //accesses an array, adds an element to the beginning, and returns the new, different array without altering the first
  
  array = [entry, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray (array, entry) {
  //accesses an array, adds an element to the beginning, and reurns the new altered array
  
  array = array.unshift(entry)
  return array
}

function addElementToEndOfArray (array, entry) {
//accesses an array, adds an element to the end, and returns the new, different array without altering the first  
  array = [...array, entry]
  return array
}

function destructivelyAddElementToEndOfArray (array, entry) {
  //accesses an array, adds an element to the end, and returns the new altered array
  array = array.push(entry)
  return array
}

function accessElementArray (array, index) {
  //acces an array with an index and return that value
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  //takes in array, removes first element and returns the mutated form
}

function removeElementFromBeginningOfArray() {
  //access an array, remove the first element, and return the new array without altering the first
}

function destructivelyRemoveElementFromEndOfArray() {
  //access an array, remeove the last element, return the entire mutated original array
}

function removeElementFromEndOfArray() {
  //access an array, remove the last element, return the new array without mutating the original
}
