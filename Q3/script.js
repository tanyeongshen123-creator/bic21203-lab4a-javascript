// Select the button and ordered list using DOM selection methods
const generateButton = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Generate list items from 1 to 5 without duplicating on repeated clicks
function generateNumbers() {
  // Clear existing list items before generating again
  numberList.textContent = "";

  // Loop from 1 through 5 and append each new list item
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${i}`;
    numberList.appendChild(listItem);
  }
}

// Attach the function to the button using addEventListener
generateButton.addEventListener("click", generateNumbers);
