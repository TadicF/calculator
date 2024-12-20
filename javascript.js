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

let firstOperand = '';
let operator = '';
let secondOperand = '';
let tempValue = '';
const currOperand = document.querySelector(".currentOperand")
const prevOperand = document.querySelector(".previousOperand")

function operate(firstOperand, operator, secondOperand) {
  console.log(operator);
  switch(operator) {
    case '+':
      add(firstOperand, secondOperand);
      break;
    case '-':
      subtract(firstOperand, secondOperand);
      break;
    case '*':
      multiply(firstOperand, secondOperand);
      break;
    case '/':
      divide(firstOperand, secondOperand);
      break;
  }
}

function updateDisplay(num) {
  if(operator === '') {
    firstOperand += num;
    currOperand.textContent = firstOperand;
  }
  else if(operator === '+' || operator === '-' || operator === '*' || operator == '/') {
    secondOperand += num;
    currOperand.textContent = secondOperand;
  }
} // So tomorrow, add logic that moves currOperand to prevOperand 
  //IF operator is selected.


// --- event listeners for keys // if(operator == ' ' {addFirstOperand})
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
})

const multiplyOperator = document.querySelector(".multiplyOperator");
multiplyOperator.addEventListener("click", () => {
  if(operator === '') {
    operator = '*';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += " x";
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
})

const subtractOperator = document.querySelector(".subtractOperator");
subtractOperator.addEventListener("click", () => {
  if(operator === '') {
    operator = '-';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += ` -`;
  }
})

