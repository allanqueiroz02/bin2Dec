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
const convertBinToDec = (digits) => {
    if (digits) {
        const convertedValue = digits.reduce((acc, item, index) => {
            const castedValue = Number(item);
            const exponent = digits.length - (index + 1);
            const result = castedValue * 2 ** exponent;
            return acc + result;
        }, 0);
        return convertedValue;
    }
};
const handleClickConvertButton = (event) => {
    event.preventDefault();
    if (binaryInput.value) {
        const formatedValue = binaryInput.value.split("");
        const convertedValue = convertBinToDec(formatedValue);
        if (resultSpan && convertedValue)
            resultSpan.innerText = convertedValue.toString();
    }
};
const handleKeydownInput = (event) => {
    if (event.key === "Enter") {
        const formatedValue = binaryInput.value.split("");
        const convertedValue = convertBinToDec(formatedValue);
        if (resultSpan && convertedValue)
            resultSpan.innerText = convertedValue.toString();
    }
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
