// Filename: sophisticated_code.js
// Content: Advanced JavaScript program

// Define a class for a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  introduce() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old, and I identify as ${this.gender}.`);
  }
}

// Create an array of Person objects
const people = [
  new Person("John", 25, "Male"),
  new Person("Sarah", 30, "Female"),
  new Person("Alex", 28, "Non-binary")
];

// Display information about each person
console.log("People Information:");
for (let person of people) {
  person.greet();
  person.introduce();
}

// Helper function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate the factorial of numbers from 1 to 10 and display the results
console.log("Factorials:");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}! = ${factorial(i)}`);
}

// Perform matrix multiplication
function multiplyMatrices(matrix1, matrix2) {
  const result = Array(matrix1.length);

  for (let i = 0; i < matrix1.length; i++) {
    result[i] = Array(matrix2[0].length).fill(0);

    for (let j = 0; j < matrix2[0].length; j++) {
      for (let k = 0; k < matrix2.length; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

const matrixA = [[1, 2], [3, 4]];
const matrixB = [[5, 6], [7, 8]];

console.log("Matrix Multiplication:");
console.log(multiplyMatrices(matrixA, matrixB));

// Generate a random hexadecimal color code
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log("Random Color:");
console.log(getRandomColor());

// Calculate the nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log("Fibonacci Numbers:");
for (let i = 0; i <= 10; i++) {
  console.log(`fib(${i}) = ${fibonacci(i)}`);
}

// Sort an array of numbers in descending order using bubble sort
function bubbleSortDescending(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}

const numbers = [5, 2, 9, 1, 3, 10, 6];
console.log("Bubble Sort (Descending Order):");
console.log(bubbleSortDescending(numbers));

// Implement a Stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    } else {
      return this.items.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack:");
console.log("Size:", stack.size());
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Pop:", stack.pop());
console.log("Size:", stack.size());

// Generate all possible permutations of a given string
function permuteString(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      permuteString(rem, prefix + str[i]);
    }
  }
}

console.log("Permutations of 'abc':");
permuteString("abc");

// Calculate the sum of the digits of a given number
function sumOfDigits(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log("Sum of Digits (12345):");
console.log(sumOfDigits(12345));

// Perform a binary search on an ordered array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const orderedArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Binary Search:");
console.log("Index of 9:", binarySearch(orderedArr, 9));
console.log("Index of 14:", binarySearch(orderedArr, 14));