let currentResult = "";
let operator = "";
let previousResult = "";

function addNumber(number) {
  currentResult += number;
  updateScreen(currentResult);
}

function addDecimal() {
  if (currentResult.indexOf(".") == -1) {
    currentResult += ".";
    updateScreen(currentResult);
  }
}

function updateScreen(display) {
  document.getElementById("result").value = display;
}

function clearScreen() {
  currentResult = "";
  operator = "";
  previousResult = "";
  updateScreen(currentResult);
}

function backspace() {
  currentResult = currentResult.slice(0, -1);
  updateScreen(currentResult);
}

function calculate(op) {
  if (op == "+") {
    operator = "+";
    previousResult = currentResult;
    currentResult = "";
  } else if (op == "-") {
    operator = "-";
    previousResult = currentResult
  }};
  console.log();