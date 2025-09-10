// // function add () {
// //     return num1 + num2
// // }
// // function subtract () {
// //     return num1 - num2
// // }
// // function multiply () {
// //     return num1 * num2
// // }
// // function divide () {
// //     return num1 / num2
// // }
// const display = document.querySelector(".input");

// let previousNumber = "";
// let currentNumber = "";
// let operation ="";
// let operatorClicked = false;

// const numberbtns = document.querySelectorAll(".number")
// numberbtns.forEach(number => {
//     number.addEventListener ("click", () => {
//         operatorClicked = false;
//         if (display.value === "0") {
//             currentNumber = number.innerText;
//             display.value = currentNumber;
//         }
//         else {
//             currentNumber += number.innerText
//             display.value = currentNumber;
//         }
//     })
// })

// const operators = document.querySelectorAll(".operator")
// operators.forEach(operator => {
//   operator.addEventListener("click", function() {
//     display.textContent += operator.value;
//     currentValue = display.innerText;
//   })
// })
// // const operatorbtns = document.querySelectorAll(".operator")
// // operatorbtns.forEach(operator => {
// //     operator.addEventListener("click", () => {
// //         if(!operatorClicked) {
// //         operation = operator.innerText;
// //         display.value += operator;
// //         operatorClicked = true;
// //     }
// //     else {
// //         display.value = currentNumber;
// //     }
// //     })  
// // })

// // let operation = "";
// // let operatorClicked = false;
// // const operators = document.querySelectorAll(".operator")
// // operators.forEach((operator)=>{
// //     operator.addEventListener('click', () => {
// //         if (!operatorClicked) {
// //         display.value += operator.innerText;
// //         operatorClicked = true;
// //         operation = operator.textContent;
// //         }
// //     })
// // })

// // let previousNumber = "";
// // let currentNumber = "";
// // const numbers = document.querySelectorAll(".number")
// // numbers.forEach((number)=>{
// //     number.addEventListener('click', () => {
// //     display.value === "0" ? display.value = number.innerText : display.value += number.innerText;
// //     operatorClicked = true ? previousNumber += number.textContent : currentNumber += number.textContent;
// //     })
// // })

// const addBtn = document.querySelector("#addbtn");
// addBtn.addEventListener("click", function () {
//     // add();
// })

// const subtractBtn = document.querySelector("#subtractbtn");
// subtractBtn.addEventListener("click", function () {
//     // subtract();
// })

// const multiplyBtn = document.querySelector("#multiplybtn");
// multiplyBtn.addEventListener("click", function () {
//     // multiply();
// })

// const divideBtn = document.querySelector("#dividebtn");
// divideBtn.addEventListener("click", function () {
//     // divide();
// })

// const clearBtn = document.querySelector(".clearbtn");
// clearBtn.addEventListener("click", function (){
//     display.value = "0";
//     previousNumber = "";
//     currentNumber = "";
//     operation = "";
//     operatorClicked = false;
// })