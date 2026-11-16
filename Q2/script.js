// Select the input, button, and result paragraph using DOM selection methods
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

// Validate the input value and display the appropriate message
function checkInput() {
  const rawValue = userInput.value.trim();
  const numericValue = Number(rawValue);

  if (rawValue === "" || !Number.isFinite(numericValue)) {
    resultParagraph.textContent = "Please enter a valid number!";
  } else if (numericValue < 10) {
    resultParagraph.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultParagraph.textContent = "The number is higher than 10";
  } else {
    resultParagraph.textContent = "The number is equal to 10";
  }
}

// Register the click event with addEventListener
checkButton.addEventListener("click", checkInput);
