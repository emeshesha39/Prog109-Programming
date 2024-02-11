// Get the input elements and the paragraph element
const numOneInput = document.getElementById("num-one");
const numTwoInput = document.getElementById("num-two");
const addSumParagraph = document.getElementById("add-sum");

// Add an event listener to trigger the addition when the inputs change
numOneInput.addEventListener("input", updateSum);
numTwoInput.addEventListener("input", updateSum);

// Function to update the sum in the paragraph
function updateSum() {
  // Get the values from the input elements and calculate the sum
  const numOne = parseFloat(numOneInput.value) || 0;
  const numTwo = parseFloat(numTwoInput.value) || 0;
  const sum = numOne + numTwo;

  // Update the content of the paragraph with the calculated sum
  addSumParagraph.textContent = `Sum: ${sum}`;
}




//ctrl+ D help you highlight what you want
//crtl+/ will comment multiple script
//myList.pop() will remove the last list
//myList.shift() will remove the first list
//myList.forEach(function (value, index) {
//     alert()
// });






















