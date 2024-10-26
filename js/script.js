const binaryInput = document.getElementById("binary-value");
const closingWarningButton = document.querySelector(".closing-btn");
const convertButton = document.getElementById("convert-button");
const resultSpan = document.getElementById("resultado");
const warningContainer = document.querySelector(".container-warning");

const changeWarningState = (state) => {
  if (state === "none") warningContainer.style.display = "none";
  else warningContainer.style.display = "flex";
};

const handleClickConvertButton = (event) => {
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
};

const handleKeydownInput = (event) => {
  if (event.key === "Enter") handleClickConvertButton(event);
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
};

const handleCloseWarning = () => {
  changeWarningState("none");
};

binaryInput.addEventListener("keydown", handleKeydownInput);
closingWarningButton.addEventListener("click", handleCloseWarning);
convertButton.addEventListener("click", handleClickConvertButton);
