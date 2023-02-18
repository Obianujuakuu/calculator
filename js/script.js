const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButton = document.querySelectorAll(".operator");
const numberButton = document.querySelectorAll(".number");
const equalsButton = document.querySelector(".equals-key");
const resultButton = document.querySelector(".result");
const previousOperand = document.querySelector(".previous-operand")
const currentOperand = document.querySelector(".current-operand")

currentOperand.textContent = '';
previousOperand.textContent = '';

const add = function(a, b){
    return a + b;
}
console.log(5 + 5);
const subtract = function(a, b) {
    return a - b;
  };
  console.log(5 - 5);
  const divide = function(a, b) {
    return a / b;
  };
  console.log(5 / 5);
  const multiply = function(a, b) {
      return a * b;
  };
  console.log(5 * 5);

  const operate = function(num1, num2, operator){
    switch (operator) {
        case "+":
          return add(num1, num2);
        case "-":
          return subtract(num1, num2);
        case "*":
          return multiply(num1, num2);
        case "/":
          return divide(num1, num2);
      }
    };
    let storedNumber = "";
    let operatorClicked = "";
    let firstNumber = "";
    let result = "";
    currentOperand.textContent = 0;
     
    numberButton.forEach((number) => {
      number.addEventListener('click', function() {
        storedNumber += number.value;
        previousOperand.textContent += storedNumber;
        calculate();
      })
    });

      operatorButton.forEach((operator => {
        operator.addEventListener('click', function() {
          if (firstNumber && storedNumber) {
            displayResult();
          }
          firstNumber = storedNumber;
          operatorClicked = operator.textContent;
          previousOperand.textContent = storedNumber + operatorClicked;
          storedNumber = '';
      
          console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
          console.log(operatorClicked);
      
        })
      }));

      const calculate = () => {
        const result = operate(parseFloat(firstNumber), parseFloat(storedNumber), operatorClicked);
      
        currentOperand.textContent = result;
        }
      
      equalsButton.addEventListener('click', calculate);

      clearButton.addEventListener('click', clear);
      function clear() {
        storedNumber = "";
        operatorClicked = "";
        firstNumber = "";
        result = "";
        previousOperand.textContent = "";
        currentOperand.textContent = 0;
       }
       
       function backSpace() {
        currentOperand.textContent = currentOperand.textContent.slice(0,-1);
        previousOperand.textContent = previousOperand.textContent.slice(0,-1);
       }
       deleteButton.addEventListener('click', backSpace);
    
      
 








