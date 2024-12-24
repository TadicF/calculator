let firstOperand = '';
let operator = '';
let secondOperand = '';
let tempValue = '';
const currOperand = document.querySelector(".currentOperand")
const prevOperand = document.querySelector(".previousOperand")

function add(firstNum, secondNum) {
  console.log(firstNum + secondNum);
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  console.log(firstNum - secondNum);
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  console.log(firstNum * secondNum);
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  console.log(firstNum / secondNum);
  return firstNum / secondNum;
}

function operate(firstOperand, operator, secondOperand) {
  console.log(operator);
  let firstNum = Number(firstOperand);
  let secondNum = Number(secondOperand);

  switch(operator) {
    case '+':
      return add(firstNum, secondNum);
      break;
    case '-':
      return subtract(firstNum, secondNum);
      break;
    case '*':
      return multiply(firstNum, secondNum);
      break;
    case '/':
      return divide(firstNum, secondNum);
      break;
  }
}

function updateDisplay(num) {
  if(operator === '') {
    let tempNum = firstOperand.toString();
    tempNum += num;
    firstOperand = tempNum;
    currOperand.textContent = firstOperand;
  }
  else if(operator === '+' || operator === '-' || operator === '*' || operator == '/') {
    secondOperand += num;
    currOperand.textContent = secondOperand;
  }
} 

function clearDisplay() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  currOperand.textContent = '';
  prevOperand.textContent = '';
}

function deleteLastOperand() {
  if(currOperand.textContent == firstOperand) {
    let num = `${firstOperand}`;
    let temp = num.split('');
    let deleted = temp.pop();
    firstOperand = temp.toString().replace(/,/g, '');
    currOperand.textContent = firstOperand;
  }
  else if(currOperand.textContent == secondOperand) {
    let num = `${secondOperand}`;
    let temp = num.split('');
    let deleted = temp.pop();
    secondOperand = temp.toString().replace(/,/g, '');
    currOperand.textContent = secondOperand;
  }
}

const keyOne = document.querySelector(".keyOne");
keyOne.addEventListener("click", () => {
  updateDisplay(`1`);
})

const keyTwo = document.querySelector(".keyTwo");
keyTwo.addEventListener("click", () => {
  updateDisplay(2);
})

const keyThree = document.querySelector(".keyThree");
keyThree.addEventListener("click", () => {
  updateDisplay(3);
})

const keyFour = document.querySelector(".keyFour");
keyFour.addEventListener("click", () => {
  updateDisplay(4);
})

const keyFive = document.querySelector(".keyFive");
keyFive.addEventListener("click", () => {
  updateDisplay(5);
})

const keySix = document.querySelector(".keySix");
keySix.addEventListener("click", () => {
  updateDisplay(6);
})

const keySeven = document.querySelector(".keySeven");
keySeven.addEventListener("click", () => {
  updateDisplay(7);
})

const keyEight = document.querySelector(".keyEight");
keyEight.addEventListener("click", () => {
  updateDisplay(8);
})

const keyNine = document.querySelector(".keyNine");
keyNine.addEventListener("click", () => {
  updateDisplay(9);
})

const keyZero = document.querySelector(".keyZero");
keyZero.addEventListener("click", () => {
  updateDisplay(0);
})

const divideOperator = document.querySelector(".divideOperator");
divideOperator.addEventListener("click", () => {
  if(operator === '') {
    operator = '/';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += " ÷";
  }
  else {
    let result = operate(firstOperand, operator, secondOperand);
    firstOperand = result;
    operator = '/';
    prevOperand.textContent = `${firstOperand} ÷`
    currOperand.textContent = '';
    secondOperand = '';
  }
})

const multiplyOperator = document.querySelector(".multiplyOperator");
multiplyOperator.addEventListener("click", () => {
  if(operator === '') {
    operator = '*';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += " x";
  }
  else {
    let result = operate(firstOperand, operator, secondOperand);
    firstOperand = result;
    operator = '*';
    prevOperand.textContent = `${firstOperand} x`;
    currOperand.textContent = '';
    secondOperand = '';
  }
})

const addOperator = document.querySelector('.addOperator');
addOperator.addEventListener("click", () => {
  if(operator === '') {
    operator = '+';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += ' +';
  }
  else {
    let result = operate(firstOperand, operator, secondOperand);
    firstOperand = result;
    operator = '+';
    prevOperand.textContent = `${firstOperand} +`;
    currOperand.textContent = '';
    secondOperand = '';
  }
})

const subtractOperator = document.querySelector(".subtractOperator");
subtractOperator.addEventListener("click", () => {
  if(operator === '') {
    operator = '-';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += ` -`;
  }
  else {
    let result = operate(firstOperand, operator, secondOperand);
    firstOperand = result;
    operator = '-';
    prevOperand.textContent = `${firstOperand} -`;
    currOperand.textContent = '';
    secondOperand = '';
  }
})

const equalOperator = document.querySelector(".equalOperator");
equalOperator.addEventListener("click", () => {
  if(operator !== '') {
    let result = operate(firstOperand, operator, secondOperand);
    currOperand.textContent = '';
    prevOperand.textContent = '';
    currOperand.textContent = result;
    firstOperand = result;
    secondOperand = '';
    operator = '';
  }
})

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", clearDisplay)

const deleteButton = document.querySelector(".deleteButton");
deleteButton.addEventListener("click", deleteLastOperand);