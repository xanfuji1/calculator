function add () {
    return num1 + num2
}
function subtract () {
    return num1 - num2
}
function multiply () {
    return num1 * num2
}
function divide () {
    return num1 / num2
}
function operate (num1, num2, operator) {
// if button clicked is add then call add funciton etc use if statement
}

// display
const buttons = document.querySelectorAll(".btns" );
const display = document.querySelector("#display");

let operation = "";
let operatorClicked = false;
const operators = document.querySelectorAll(".operators .btns")
operators.forEach((operator)=>{
    operator.addEventListener('click', () => {
        operatorClicked = true;
        operation = (operator.textContent)
        
    } )
})

let num1 = ""
let num2 = ""
const numbers = document.querySelectorAll(".numbers .btns")
numbers.forEach((number)=>{
    number.addEventListener('click', () => {
        if (!operatorClicked) {
            num1 += (number.textContent)
            console.log(num1)
        }
        else {
            num2 += (number.textContent)
            console.log(num2)
        } 
    })
})

buttons.forEach((button)=>{
    button.addEventListener('click', () => {
    display.innerHTML += button.innerText;
  });
})

const addBtn = document.querySelector("#addbtn");
addBtn.addEventListener("click", function () {
    // add();
})

const subtractBtn = document.querySelector("#subtractbtn");
subtractBtn.addEventListener("click", function () {
    // subtract();
})

const multiplyBtn = document.querySelector("#multiplybtn");
multiplyBtn.addEventListener("click", function () {
    // multiply();
})

const divideBtn = document.querySelector("#dividebtn");
divideBtn.addEventListener("click", function () {
    // divide();
})