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

binaryInput.addEventListener("keydown", (event) => {
  console.log(">key", event.key);

  if (event.key === "Enter") console.log("Clicou no enter");
  if (event.key !== "Enter" && event.key !== "0" && event.key !== "1"){
    event.preventDefault()
    alert('Não é permitido informar algo diferente de 0 ou 1.')
  }
});
