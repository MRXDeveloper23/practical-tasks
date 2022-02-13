const isPrime = require("../4-module/object");

const movieNames = [
  "Star Wars",
  "Spider Man",
  "Thor",
  "Legends",
  "Eternals",
  "Criminal",
];
// movieNames.forEach((movie) => console.log(movie));

//Car manufacturers
const manufacturers = [
  "Audi",
  "Toyota",
  "Tesla",
  "Mercedes",
  "Chevrolet",
];
function toStringAndReturnBack(arr) {
  let string = arr.toString();
  console.log(string);
  let newArr = string.split(",");
  console.log(newArr);
}
// toStringAndReturnBack(manufacturers);

//Names of my friends
const names = [
  "Abdulaziz",
  "Muhammadjon",
  "Akobir",
  "Bekhruz",
  "Muhammadsodiq",
];
let newNames = names.map((name) => "Hello " + name);
// console.log(newNames);

//Convert numeric array to boolean
const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let booleanArray = numericArray.map((value) =>
  Boolean(value)
);
// console.log(booleanArray);

let arr = [1, 6, 7, 8, 3, 4, 5, 6];
//Sort Array in descending order
function sortArray(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  console.log(sortedArray);
}
// sortArray(arr);

//Filter array
const filterArray = (arr) => {
  let filteredArray = arr.filter((num) => num > 3);
  console.log(filteredArray);
};
// filterArray(arr);

//Index of array
const indexOfArray = (arr, num) => console.log(arr[num]);
// indexOfArray(arr, 5);

//﻿Implement a loop that will print the number 'a' until it is less than 10
const printNumber = (num) => {
  while (num >= 10) {
    console.log(num);
    num--;
  }
  console.log("it is less than 10");
};
// printNumber(9);

//Printing prime numbers
const printPrimeNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};
// printPrimeNumbers(10);

//Printing odd numbers
const printOddNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};
// printOddNumbers(10);
