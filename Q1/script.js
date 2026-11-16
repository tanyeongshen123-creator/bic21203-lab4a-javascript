// Select the paragraph and button using DOM selection methods
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// Define the function that replaces the paragraph text
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// Attach the function to the button using addEventListener
changeButton.addEventListener("click", changeMessage);
