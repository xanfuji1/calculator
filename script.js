let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") return Math.round((num1 + num2)*100)/100;
    if (operator === "-") return Math.round((num1 - num2)*100)/100;
    if (operator === "x") return Math.round((num1 * num2)*100)/100; 
    if (operator === "÷") return Math.round((num1 / num2)*100)/100;
    }      

const display = document.querySelector(".input")
const numbers = document.querySelectorAll(".number")
const operatorbtns = document.querySelectorAll(".operator")
const equalbtn = document.querySelector(".equal")
const clearbtn = document.querySelector(".clearbtn")
const deletebtn = document.querySelector(".deletebtn")
const decimalbtn = document.querySelector(".decimalbtn")

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

operatorClicked = false;

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
    operatorClicked = false;
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
    display.value = display.value.slice(0,-1);
})

decimalbtn.addEventListener("click", () => {
    if (!operatorClicked) {
        if (!num1.includes(".")) { 
           num1 += ".";
            display.value += ".";   
        }
    }
    else {
        if (!num2.includes(".")) {
            num2 += ".";
            display.value += ".";
        }
    } 
})


