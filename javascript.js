let firstOperand = '';
let operator = '';
let secondOperand = '';
let tempValue = '';
let isDot = true;
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
  if(secondNum === 0) {
    alert('Error: Division by 0 is not allowed.');
    firstOperand = '';
    secondOperand = '';
    operator = '';
    currOperand.textContent = '';
    prevOperand.textContent = '';
    return '';
  }
  else {
    console.log(firstNum / secondNum);
    return firstNum / secondNum;
  }
}

function operate(firstOperand, operator, secondOperand) {
  console.log(operator);
  let firstNum = Number(firstOperand);
  let secondNum = Number(secondOperand);
  isDot = true;

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

function checkFloat(string) {
  let val = parseFloat(string);
  if(!isNaN(val) && val.toString().indexOf('.') != -1) {
    return true;
  }
  else {
    return false;
  }
}

function checkFirstLimit() {
  let firstLength = firstOperand.split('').length;
  if(firstLength >= 21) {
    return false;
  }
  else {
    return true;
  }
}

function checkSecondLimit() {
  let secondLength = secondOperand.split('').length;
  if(secondLength >= 21) {
    return false;
  }
  else {
    return true;
  }
}

function updateDisplay(num) {
  let firstLimit = checkFirstLimit();
  let secondLimit = checkSecondLimit();
  console.log(firstLimit);
  if(firstLimit) {
    if(operator === '') {
      if(firstOperand.toString() === '0') {
        firstOperand = '';
      }
      let tempNum = firstOperand.toString();
      tempNum += num;
      firstOperand = tempNum;
      currOperand.textContent = firstOperand;
    }
  }
  if(secondLimit) {
    if(operator === '+' || operator === '-' || operator === '*' || operator == '/') {
      
      secondOperand += num;
      currOperand.textContent = secondOperand;
    }
  }
} 

function clearDisplay() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  currOperand.textContent = '';
  prevOperand.textContent = '';
  isDot = true;
}

function deleteLastOperand() {
  if(currOperand.textContent == firstOperand) {
    let num = `${firstOperand}`;
    let temp = num.split('');
    let deleted = temp.pop();
    if(deleted === '.') {
      isDot = true;
    }
    else if(deleted !== '.') {
      isDot = false;
    }
    firstOperand = temp.toString().replace(/,/g, '');
    currOperand.textContent = firstOperand;
  }
  else if(currOperand.textContent == secondOperand) {
    let num = `${secondOperand}`;
    let temp = num.split('');
    let deleted = temp.pop();
    if(deleted === '.') {
      isDot = true;
    }
    else if(deleted !== '.') {
      isDot = false;
    }
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
  if(firstOperand !== '0') {
    updateDisplay(0);
  }
})

const divideOperator = document.querySelector(".divideOperator");
divideOperator.addEventListener("click", () => {
  isDot = true;
  if(operator === '') {
    if(firstOperand === '' && secondOperand === '') {
      operator = '';
      return alert("Error: Operators require numbers to operate.")
    }
    operator = '/';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += " ÷";
  }
  else if(operator !== ''){
    let result = operate(firstOperand, operator, secondOperand);
    let isInteger = Number.isInteger(result);
    if(!isInteger) {
      firstOperand = result.toFixed(2);
      operator = '/';
      prevOperand.textContent = `${result.toFixed(2)} ÷`;
      currOperand.textContent = '';
      secondOperand = '';
    }
    else if(isInteger) {
      firstOperand = result;
      operator = '/';
      prevOperand.textContent = `${firstOperand} ÷`
      currOperand.textContent = '';
      secondOperand = '';
    }
    isInteger = '';
  }
})

const multiplyOperator = document.querySelector(".multiplyOperator");
multiplyOperator.addEventListener("click", () => {
  isDot = true;
  if(operator === '') {
    if(firstOperand === '' && secondOperand === '') {
      operator = '';
      return alert("Error: cannot use operators without numbers provided")
    }
    operator = '*';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += " x";
  }
  else if(operator !== '') {
    let result = operate(firstOperand, operator, secondOperand);
    let isInteger = Number.isInteger(result);
    if(!isInteger) {
      firstOperand = result.toFixed(2);
      operator = '*';
      prevOperand.textContent = `${result.toFixed(2)} x`;
      currOperand.textContent = '';
      secondOperand = '';
    }
    else if(isInteger) {
      firstOperand = result;
      operator = '*';
      prevOperand.textContent = `${firstOperand} x`
      currOperand.textContent = '';
      secondOperand = '';
    }
    isInteger = '';
   }
  })

const addOperator = document.querySelector('.addOperator');
addOperator.addEventListener("click", () => {
  isDot = true;
  if(operator === '') {
    if(firstOperand === '' && secondOperand === '') {
      operator = '';
      return alert("Error: cannot use operators without numbers provided")
    }
    operator = '+';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += ' +';
  }
  else if(operator !== '') {
    let result = operate(firstOperand, operator, secondOperand);
    let isInteger = Number.isInteger(result);
    if(!isInteger) {
      firstOperand = result.toFixed(2);
      operator = '+';
      prevOperand.textContent = `${result.toFixed(2)} +`;
      currOperand.textContent = '';
      secondOperand = '';
    }
    else if(isInteger) {
      firstOperand = result;
      operator = '+';
      prevOperand.textContent = `${firstOperand} +`
      currOperand.textContent = '';
      secondOperand = '';
    }
    isInteger = '';
  }
})

const subtractOperator = document.querySelector(".subtractOperator");
subtractOperator.addEventListener("click", () => {
  isDot = true;
  if(operator === '') {
    if(firstOperand === '' && secondOperand === '') {
      operator = '';
      return alert("Error: cannot use operators without numbers provided")
    }
    operator = '-';
    prevOperand.textContent = currOperand.textContent;
    currOperand.textContent = '';
    prevOperand.textContent += ` -`;
  }
  else if(operator !== '') {
    let result = operate(firstOperand, operator, secondOperand);
    let isInteger = Number.isInteger(result);
    if(!isInteger) {
      firstOperand = result.toFixed(2);
      operator = '-';
      prevOperand.textContent = `${result.toFixed(2)} -`;
      currOperand.textContent = '';
      secondOperand = '';
    }
    else if(isInteger) {
      firstOperand = result;
      operator = '-';
      prevOperand.textContent = `${firstOperand} -`
      currOperand.textContent = '';
      secondOperand = '';
    }
    isInteger = '';
  }
})

const equalOperator = document.querySelector(".equalOperator");
equalOperator.addEventListener("click", () => {
  if(operator !== '') {
    let result = operate(firstOperand, operator, secondOperand);
    let isInteger = Number.isInteger(result);
    if(!isInteger) {
      prevOperand.textContent = '';
      currOperand.textContent = '';
      currOperand.textContent = result.toFixed(2);
      firstOperand = result.toFixed(2);
      secondOperand = '';
      operator = '';
    }
    else if(isInteger) {
      currOperand.textContent = '';
      prevOperand.textContent = '';
      currOperand.textContent = result;
      firstOperand = result;
      secondOperand = '';
      operator = '';
    }
    isInteger = '';
    // function to check if result is floating point
    let isFloat = checkFloat(result);
    console.log(isFloat);
    if(isFloat) {
      isDot = false;
    }
    else if(!isFloat) {
      isDot = true;
    }
  }
})

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", clearDisplay)

const deleteButton = document.querySelector(".deleteButton");
deleteButton.addEventListener("click", deleteLastOperand);

const dotOperator = document.querySelector(".dotOperator");
dotOperator.addEventListener("click", () => {
  if(firstOperand === '') {
    return alert("Error: Cannot use dot operator without numbers provided.");
  }
  else if(isDot) {
    if(currOperand.textContent == firstOperand) {
      let dot = `${firstOperand}.`;
      currOperand.textContent += '.';
      firstOperand = dot;
      isDot = false;
    }
    else if(currOperand.textContent == secondOperand) {
      let dot = `${secondOperand}.`;
      currOperand.textContent += '.';
      secondOperand = dot;
      isDot = false;
    }
  }
});

// 22 numbers limit on display