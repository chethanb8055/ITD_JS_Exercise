// Question:01 Write a function that takes two numbers as arguments and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}

let n1 = 40;
let n2 = 60;

let sumOfTwo = sum(n1, n2);
console.log(sumOfTwo);  // Output: 100

// Question:02 Write a function that takes a string as an argument and returns its length.
function getStringLength(str) {
    return str.length;
}

const str = "Priyansh Patel";
console.log(`String - ${str} \nLength: ${getStringLength(str)}`);  // Output: 14

// Question:03 Write a program that takes two numbers and displays their sum, difference, product, and quotient.
const number1 = 100;
const number2 = 69;

const sum_1 = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number1 / number2;

console.log(`Number1 - ${number1} & Number2 - ${number2}\nSum: ${sum_1} \nDifference: ${difference} \nProduct: ${product}\nQuotient: ${quotient}`);

// Question:04 Write a function that takes two numbers as arguments and returns the larger number.
function largerNumber(a, b) {
    return a > b ? a : b;
}

const num1 = 100;
const num2 = 69;

console.log(`Larger Number Between: ${num1} and ${num2} is ${largerNumber(num1, num2)}`);

// Question:05 Write a program that displays a string in reverse order.
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Priyansh"));  // Output: hsnayirP

// Question:06 Write a program that takes a number and checks whether it is positive, negative, or zero.
function checkNumber(number) {
    return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
}

console.log(checkNumber(10));  // Output: Positive
console.log(checkNumber(0));   // Output: Zero
console.log(checkNumber(-10)); // Output: Negative

// Question:07 Write a program that takes a number and prints the multiplication table for that number.
const multiplicationTable = (number) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiplicationTable(12);

// Question:08 Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(10));  // Output: 55

// Question:09 Write a program that takes a string and prints out the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (let s of str) {
        if ('aeiouAEIOU'.includes(s)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Priyansh"));  // Output: 2

// Question:10 Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
function findCommonElements(arr1, arr2) {
    let commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }
    return commonElements.sort((a, b) => a - b);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements);  // Output: [3, 4, 5]

// Question:11 Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.
function countLetters(str) {
    let count = {};
    for (let ch of str.replace(/\s+/g, '')) {  // Remove spaces for counting
        count[ch] = count[ch] ? count[ch] + 1 : 1;
    }
    return count;
}

console.log(countLetters("My Name is Priyansh Patel"));

//Question:12 Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

const counter = createCounter();

console.log(counter());  // Output: 1
console.log(counter());  // Output: 2
console.log(counter());  // Output: 3

//Question:13 Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.
function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum;
}

const array1 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(sumEvenNumbers(array1));  // Output: 72

//Question:14 Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

const array2 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(sumArray(array2));  // Output: 140

//Question:15 Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
function filterStrings(strings) {
    let result = [];
    for (let str of strings) {
        if (str.length > 5) {
            result.push(str);
        }
    }
    return result;
}

const stringsArray = ["Priyansh", "Khushi", "Queen", "King", "Prishi", "Prish"];

console.log(stringsArray);
console.log(filterStrings(stringsArray));  // Output: ["Priyansh", "Prishi"]

//Question:16 Write a function that takes an object and returns an array of all the keys in the object.
function keyOfObject(obj) {
    return Object.keys(obj);
}

const obj = {
    Name: "Priyansh",
    Age: 20,
    City: "Goa",
    Gender: "Male"
}

console.log(keyOfObject(obj));  // Output: ["Name", "Age", "City", "Gender"]

//Question:17 Write a function that takes an array of objects and returns an array of all the values of a specified property name.
function valueOfObject(arrOfObj, propertyName) {
    return arrOfObj.map(obj => obj[propertyName]);
}

const objArray = [
    {
        Name: "Priyansh",
        Age: 20,
        City: "Goa",
        Gender: "Male"
    },
    {
        Name: "Khushi",
        Age: 17,
        City: "Goa",
        Gender: "Female"
    },
    {
        Name: "Bhosu",
        Age: 20,
        City: "Delhi",
        Gender: "Transgender"
    },
    {
        Name: "Sumit",
        Age: 24,
        City: "Mumbai",
        Gender: "Male"
    },
]

console.log(`Name: ${valueOfObject(objArray, "Name")}`);  // Output: ["Priyansh", "Khushi", "Bhosu", "Sumit"]
console.log(`Age: ${valueOfObject(objArray, "Age")}`);    // Output: [20, 17, 20, 24]
console.log(`City: ${valueOfObject(objArray, "City")}`);  // Output: ["Goa", "Goa", "Delhi", "Mumbai"]
console.log(`Gender: ${valueOfObject(objArray, "Gender")}`);  // Output: ["Male", "Female", "Transgender", "Male"]
