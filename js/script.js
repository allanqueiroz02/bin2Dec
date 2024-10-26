const binaryInput = document.getElementById("binary-value");
const resultSpan = document.getElementById("resultado");
const convertButton = document.getElementById("convert-button");
const warningContainer = document.querySelector(".container-warning");
const closingWarningButton = document.querySelector(".closing-btn");

function changeWarningState(state) {
  if (state === "none") warningContainer.style.display = "none";
  else warningContainer.style.display = "flex";
}

convertButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (binaryInput) {
    const formattedValue = [...binaryInput.value];

    const convertedValue = formattedValue.reduce((acc, item, index) => {
      const castedValue = Number(item);
      const exponent = formattedValue.length - (index + 1);
      const result = castedValue * 2 ** exponent;

      return acc + result;
    }, 0);

    resultSpan.innerText = convertedValue;
  }

  changeWarningState("none");
});

binaryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") console.log("Clicou no enter");
  if (
    event.key !== "Enter" &&
    event.key !== "Backspace" &&
    event.key !== "0" &&
    event.key !== "1"
  ) {
    event.preventDefault();
    changeWarningState("flex");
  }
  if (event.key === "0" || event.key === "1") {
    changeWarningState("none");
  }
});

closingWarningButton.addEventListener("click", () => {
  changeWarningState("none");
});
