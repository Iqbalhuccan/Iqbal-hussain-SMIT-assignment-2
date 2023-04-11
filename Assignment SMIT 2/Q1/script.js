// Get the elements from the DOM
const numberInput = document.getElementById('number');
const addButton = document.getElementById('addButton');
const output = document.getElementById('output');

// Create the closure function
function addNumberTo(n) {
  return function(x) {
    return x + n;
  };
}

// Create a new function that adds 5 to any number passed to it
const addFive = addNumberTo(5);

// Add an event listener to the button
addButton.addEventListener('click', function() {
  // Get the number from the input field
  const number = Number(numberInput.value);
  // Call the addFive function with the input number
  const result = addFive(number);
  // Display the result in the output container
  output.innerHTML = `Result: ${result}`;
});
