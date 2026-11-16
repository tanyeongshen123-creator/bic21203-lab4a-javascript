# BIC21203 Lab #4a — Client-Side Scripting (JavaScript)

## Student Information
- **Name:** [Your Name]
- **Student ID / Matric No.:** [Your Student ID]
- **Course:** BIC21203 Web Development
- **Lab:** Lab #4a — Client-Side Scripting (JavaScript)

---

## Project Structure

```text
bic21203-lab4a-javascript/
├── index.html          # Navigation page linking to Q1, Q2, and Q3
├── README.md           # Documentation, explanation, test cases, and reflection
├── Q1/
│   ├── index.html      # Question 1 HTML markup
│   ├── script.js       # Question 1 JavaScript (changeMessage)
│   └── style.css       # Question 1 styling
├── Q2/
│   ├── index.html      # Question 2 HTML markup
│   ├── script.js       # Question 2 JavaScript (checkInput)
│   └── style.css       # Question 2 styling
└── Q3/
    ├── index.html      # Question 3 HTML markup
    ├── script.js       # Question 3 JavaScript (generateNumbers)
    └── style.css       # Question 3 styling
```

---

## Brief Explanation of Solutions

### Question 1 — Interactive Text Changer (`Q1/`)
- **Objective:** Update a paragraph's text when the user clicks a button.
- **Implementation:**
  - Uses `document.getElementById("message")` and `document.getElementById("changeBtn")` to select the DOM elements.
  - Defines `changeMessage()` which sets `messageParagraph.textContent = "Hello there!"`.
  - Attaches the `changeMessage` handler to `#changeBtn` using `addEventListener("click", changeMessage)`.

### Question 2 — Smart Number Validator (`Q2/`)
- **Objective:** Validate user input from a text field and compare numeric values against `10`.
- **Implementation:**
  - Reads `userInput.value.trim()` inside `checkInput()` so empty strings or whitespace-only inputs are caught before numeric conversion (since `Number("")` evaluates to `0` in JavaScript).
  - Converts the trimmed string using `Number(rawValue)` and checks validity with `Number.isFinite(numericValue)`.
  - Uses an `if...else if...else` structure to display one of four exact status messages via `resultParagraph.textContent`:
    - Invalid / empty: `"Please enter a valid number!"`
    - `< 10`: `"The number is lower than 10"`
    - `> 10`: `"The number is higher than 10"`
    - `=== 10`: `"The number is equal to 10"`

### Question 3 — Dynamic Number Generator (`Q3/`)
- **Objective:** Generate an ordered list (`<ol>`) of 5 items (`"The number is 1"` to `"The number is 5"`) when clicking "Generate" without duplicating items on subsequent clicks.
- **Implementation:**
  - Clears `#numberList` at the start of `generateNumbers()` using `numberList.textContent = ""`.
  - Iterates from `1` through `5` using a `for` loop (`for (let i = 1; i <= 5; i++)`).
  - Creates each `<li>` element with `document.createElement("li")`, sets its text using `textContent`, and appends it to `#numberList` via `appendChild()`.

---

## Instructions to Run Each Question

1. Clone or download this repository (`bic21203-lab4a-javascript`).
2. Open `index.html` in any modern desktop web browser (Chrome, Edge, Firefox, or Safari) to navigate to each question, or open each question directly:
   - **Question 1:** Open `Q1/index.html` and click the **Change Message** button.
   - **Question 2:** Open `Q2/index.html`, enter test inputs (`5`, `10`, `15`, `10.5`, `abc`, or leave empty), and click **Check**.
   - **Question 3:** Open `Q3/index.html` and click **Generate** (click multiple times to verify no duplicate items are created).

---

## Test Cases & Expected Output Summary

| Question | Test Input / Action | Expected Output |
| :--- | :--- | :--- |
| **Q1** | Initial page load | `Welcome to my website!` |
| **Q1** | Click **Change Message** | `Hello there!` |
| **Q2** | Input `5` → Click **Check** | `The number is lower than 10` |
| **Q2** | Input `10` → Click **Check** | `The number is equal to 10` |
| **Q2** | Input `15` → Click **Check** | `The number is higher than 10` |
| **Q2** | Input `10.5` → Click **Check** | `The number is higher than 10` |
| **Q2** | Input `abc` → Click **Check** | `Please enter a valid number!` |
| **Q2** | Empty / whitespace input → Click **Check** | `Please enter a valid number!` |
| **Q3** | Click **Generate** (once or repeatedly) | Ordered list of 5 items: `The number is 1` through `The number is 5` |

---

## Screenshots

> Replace the placeholders below with your browser screenshots:
- `screenshots/q1-before-after.png`
- `screenshots/q2-test-cases.png`
- `screenshots/q3-generated-list.png`

---

## Short Reflection (for PDF Report)

Through this lab, I learned how to separate HTML structure from client-side behavior using external JavaScript files with the `defer` attribute and `addEventListener()` instead of inline event handlers. Implementing Question 2 highlighted the importance of trimming strings before calling `Number()`, as JavaScript otherwise coerces empty or whitespace-only strings to `0`. Furthermore, using `textContent` and `document.createElement()` in Questions 1 and 3 demonstrated how to dynamically manipulate the DOM safely without exposing the page to cross-site scripting (XSS) vulnerabilities associated with `innerHTML`. Overall, these exercises strengthened my understanding of DOM selection, event-driven programming, conditional validation, and loop-based element creation.
