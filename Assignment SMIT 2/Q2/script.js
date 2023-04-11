// Define the array and value to search for
const myArray = [1, 2, 3, 4, 5];
const searchValue = 3;

// Define the recursive search function
function recursiveSearch(arr, val) {
  // Check if the array is empty
  if (arr.length === 0) {
    return false;
  }
  
  // Check if the current value is equal to the search value
  if (arr[0] === val) {
    return true;
  }
  
  // Remove the first value from the array and recursively search the rest
  return recursiveSearch(arr.slice(1), val);
}

// Call the recursive search function and log the result
console.log(recursiveSearch(myArray, searchValue));
