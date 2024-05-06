#!/usr/env node
import inquirer from "inquirer";

const ans = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber"},
    {message: "Enter second number", type: "number", name: "secondNumber"},
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);

// Conditional Statement:
if (ans.operator === "Addition") {
    console.log(ans.firstNumber + ans.secondNumber)
} else if (ans.operator === "Subtraction") {
    console.log(ans.firstNumber - ans.secondNumber)
    
} else if (ans.operator === "Multiplication") {
    console.log(ans.firstNumber * ans.secondNumber)
} else if (ans.operator === "Division") {
    console.log(ans.firstNumber / ans.secondNumber)
} else {
    console.log( "Please select a valid operator")
}    