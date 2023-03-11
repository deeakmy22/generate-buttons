const generateButtonsBtn = document.getElementById("generate-buttons");
const numButtonsInput = document.getElementById("num-buttons");
const buttonsContainer = document.getElementById("buttons-container");

let winnerButtonIndex;

generateButtonsBtn.addEventListener("click", () => {
  buttonsContainer.innerHTML = "";
  const numButtons = numButtonsInput.value;
  winnerButtonIndex = Math.floor(Math.random() * numButtons);
  for (let i = 0; i < numButtons; i++) {
    const button = document.createElement("button");
    button.innerText = `Button ${("Button", i + 1)}`;
    button.style.marginRight = "10px";
    button.classList.add("btn", "btn-primary");
    buttonsContainer.appendChild(button);
  }
});

buttonsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttonIndex = Array.from(buttonsContainer.children).indexOf(
      event.target
    );
    if (buttonIndex === winnerButtonIndex) {
      alert("Congratulations! You've guessed the button!");
    } else {
      alert("Sorry! Is not a winner :(");
    }
  }
});
