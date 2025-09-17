/* ------------------ PART 2: Functions ------------------ */

// Global scope variable
let globalMessage = "I live in global scope!";

// Function with parameters & return value
function addNumbers(a, b) {
  // Local scope variable
  let sum = a + b;
  return sum;
}

// Function using DOM + function reusability
function showSum() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);

  // Call reusable function
  let result = addNumbers(n1, n2);

  document.getElementById("sumResult").textContent =
    `The sum of ${n1} and ${n2} is: ${result}`;
}

/* ------------------ PART 3: JS + CSS Integration ------------------ */

// Select elements
const animateBtn = document.getElementById("animateBtn");
const magicBox = document.getElementById("magicBox");

// Function to trigger animation
function triggerAnimation(animationName) {
  magicBox.classList.remove(animationName); // reset animation
  void magicBox.offsetWidth; // trick to restart animation
  magicBox.classList.add(animationName);
}

// On button click, alternate between animations
let toggle = true;
animateBtn.addEventListener("click", () => {
  if (toggle) {
    triggerAnimation("bounce");
  } else {
    triggerAnimation("spin");
  }
  toggle = !toggle;
});
