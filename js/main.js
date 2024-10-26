"use strict";
const binaryInput = document.getElementById("binary-value");
const closingWarningButton = document.querySelector(".closing-btn");
const convertButton = document.getElementById("convert-button");
const resultSpan = document.getElementById("resultado");
const warningContainer = (document.querySelector(".container-warning"));
const changeWarningState = (state) => {
    if (warningContainer) {
        if (state === "none")
            warningContainer.style.display = "none";
        else
            warningContainer.style.display = "flex";
    }
};
const handleConvertValue = () => {
    if (binaryInput) {
        const formattedValue = [...binaryInput.value];
        const convertedValue = formattedValue.reduce((acc, item, index) => {
            const castedValue = Number(item);
            const exponent = formattedValue.length - (index + 1);
            const result = castedValue * 2 ** exponent;
            return acc + result;
        }, 0);
        if (resultSpan)
            resultSpan.innerText = convertedValue.toString();
    }
    changeWarningState("none");
};
const handleClickConvertButton = (event) => {
    event.preventDefault();
    handleConvertValue();
};
const handleKeydownInput = (event) => {
    if (event.key === "Enter")
        handleConvertValue();
    if (event.key !== "Enter" &&
        event.key !== "Backspace" &&
        event.key !== "0" &&
        event.key !== "1") {
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
if (binaryInput)
    binaryInput.addEventListener("keydown", handleKeydownInput);
if (closingWarningButton)
    closingWarningButton.addEventListener("click", handleCloseWarning);
if (convertButton)
    convertButton.addEventListener("click", handleClickConvertButton);
