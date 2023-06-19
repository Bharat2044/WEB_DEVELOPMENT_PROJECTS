const computerGuess = Math.floor(Math.random() * 100) + 1;
const message = document.getElementById("message");
const inputBox = document.getElementById("inputBox");
const button = document.getElementById("button");

let guessCount = 0;

button.addEventListener("click", () => {
  let userGuuess = inputBox.value;
  guessCount++;

  if (userGuuess == "") 
    message.innerText = "Please enter a number.";

  else if (Number(userGuuess) === computerGuess) {
    message.innerText =
      "Congratulations! You guessed the number in " + guessCount + " guesses.";
    message.classList.add("correct"); // Add animation class
    guessCount = 0;
  } 
  else if (Number(userGuuess) < computerGuess) {
    message.innerText = "Too low. Guess again.";
  } 
  else if (Number(userGuuess) > computerGuess) {
    message.innerText = "Too high. Guess again.";
  }

  inputBox.value = ""; // Clear input field
});
