const generateButtonsBtn = document.getElementById("generate-buttons");
const numButtonsInput = document.getElementById("num-buttons");
const buttonsContainer = document.getElementById("buttons-container");

const winnerButtonIndex = Math.floor(Math.random() * numButtonsInput.value);

generateButtonsBtn.addEventListener("click", () => {
  buttonsContainer.innerHTML = "";
  for (let i = 0; i < numButtonsInput.value; i++) {
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
