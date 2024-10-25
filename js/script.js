const binaryInput = document.getElementById("binary-value");
const resultSpan = document.getElementById("resultado");
const convertButton = document.getElementById("convert-button");

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
});
