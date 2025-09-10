let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "x") return num1 * num2;
    if (operator === "÷") {
        if (num2 === 0) {
            return 8008135
        }
        return num1 / num2;
    }      
}

const display = document.querySelector(".input")
const numbers = document.querySelectorAll(".number")
const operatorbtns = document.querySelectorAll(".operator")
const equalbtn = document.querySelector(".equal")
const clearbtn = document.querySelector(".clearbtn")
const deletebtn = document.querySelector(".deletebtn")

let operatorClicked = false;

numbers.forEach(number => {
    number.addEventListener ("click", () => {
        if(!operatorClicked) {
            num1 += number.textContent;
        }
        else {
            num2 += number.textContent;  
        }
        display.value += number.textContent;
    })
})

operatorbtns.forEach(operatorbtn => {
    operatorbtn.addEventListener("click", () => {
        operatorClicked = true;
        let prevOperator = operator;
        operator = operatorbtn.textContent;
        if (!num2) {display.value = String(num1 + operator);}
        else {
            result = operate(num1, num2, prevOperator);
            num1 = result;
            num2 = "";
            display.value = String(result) + operator;
        } 
    })
})

equalbtn.addEventListener("click",() => {
    result = operate(num1, num2, operator);
    num1 = result;
    num2 = "";
    display.value = String(result);

} )

clearbtn.addEventListener("click",() => {
    display.value = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    operatorClicked = false;
})

deletebtn.addEventListener("click", () => {
    
})
