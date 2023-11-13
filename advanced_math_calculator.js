/*
Filename: advanced_math_calculator.js

This code is an advanced math calculator that performs various mathematical operations on numbers entered by the user. It has a menu-driven interface with multiple options, including addition, subtraction, multiplication, division, exponentiation, square root, and factorial. The code also includes advanced features like prime number checking and finding the greatest common divisor (GCD) of two numbers.

To use this calculator, run the code and follow the instructions provided in the console.

Note: This code uses complex logic and is designed for educational purposes to demonstrate advanced JavaScript concepts. It may not be optimized for performance.
*/

// Display menu options and prompt for user input
function displayMenu() {
    console.log("------------------");
    console.log("Math Calculator");
    console.log("------------------");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exponentiation");
    console.log("6. Square Root");
    console.log("7. Factorial");
    console.log("8. Check Prime Number");
    console.log("9. Find GCD");
    console.log("0. Quit");
    console.log("------------------");
    return prompt("Select an operation (0-9): ");
}

// Validate user input and return as a number
function getInput(message) {
    let input = prompt(message);
    while (isNaN(input)) {
        input = prompt("Invalid input! Please enter a valid number: ");
    }
    return parseFloat(input);
}

// Perform addition
function addition() {
    let num1 = getInput("Enter the first number: ");
    let num2 = getInput("Enter the second number: ");
    console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
}

// Perform subtraction
function subtraction() {
    let num1 = getInput("Enter the first number: ");
    let num2 = getInput("Enter the second number: ");
    console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
}

// Perform multiplication
function multiplication() {
    let num1 = getInput("Enter the first number: ");
    let num2 = getInput("Enter the second number: ");
    console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
}

// Perform division
function division() {
    let num1 = getInput("Enter the dividend: ");
    let num2 = getInput("Enter the divisor: ");
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
    }
}

// Perform exponentiation
function exponentiation() {
    let base = getInput("Enter the base: ");
    let exponent = getInput("Enter the exponent: ");
    console.log(`Result: ${base} ^ ${exponent} = ${Math.pow(base, exponent)}`);
}

// Perform square root
function squareRoot() {
    let number = getInput("Enter the number: ");
    if (number < 0) {
        console.log("Error: Square root of a negative number is undefined.");
    } else {
        console.log(`Result: √${number} = ${Math.sqrt(number)}`);
    }
}

// Perform factorial
function factorial() {
    let number = getInput("Enter a non-negative integer: ");
    if (number < 0 || !Number.isInteger(number)) {
        console.log("Error: Factorial is defined only for non-negative integers.");
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        console.log(`Result: ${number}! = ${result}`);
    }
}

// Check if a number is prime
function isPrime(number) {
    if (number === 2) {
        return true;
    }
    if (number <= 1 || number % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Perform prime number check
function primeNumberCheck() {
    let number = getInput("Enter a positive integer: ");
    console.log(`${number} is${isPrime(number) ? "" : " not"} a prime number.`);
}

// Find the greatest common divisor (GCD) of two numbers
function findGCD() {
    let num1 = getInput("Enter the first number: ");
    let num2 = getInput("Enter the second number: ");
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(`GCD(${num1}, ${num2}) = ${a}`);
}

// Main function to handle user interactions
function main() {
    let choice = "";
    while (choice !== "0") {
        choice = displayMenu();
        console.log("------------------");
        switch (choice) {
            case "1":
                addition();
                break;
            case "2":
                subtraction();
                break;
            case "3":
                multiplication();
                break;
            case "4":
                division();
                break;
            case "5":
                exponentiation();
                break;
            case "6":
                squareRoot();
                break;
            case "7":
                factorial();
                break;
            case "8":
                primeNumberCheck();
                break;
            case "9":
                findGCD();
                break;
            case "0":
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid choice! Please enter a valid option (0-9).");
                break;
        }
        console.log("------------------");
    }
}

// Call the main function to start the program
main();