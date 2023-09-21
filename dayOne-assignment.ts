import './style.css'


// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;

// // character = 20;
// character = 'luigi';

// // age = 'yoshi';
// age = 40;

// // isBlackBelt = 'yes';
// isBlackBelt = true;

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// // console.log(area('hello'));
// console.log(circ(7.5)); 


// Assignment 1 : Variable Declaration
// Declare variables to store a name and age.
const name: string = "John Doe";
const age: number = 25;

console.log(`My name is ${name} and I am ${age} years old.`);


// Assignment 2 : Type Annotation and Inference
// Infer types and explicitly annotate types for variables.
let favoriteMovie = "Inception"; // Infer type
let releaseYear: number = 2010; // Explicitly annotated type

console.log(`My favorite movie is ${favoriteMovie} released in ${releaseYear}.`);



// Assignment 3 : Functions and Parameters
// Create a function that calculates the area of a rectangle.
function calcDistance(speed: number, time: number): number {
  return speed * time;
}

const speed = 5;
const time = 10;
console.log(`The distance travelled is ${calcDistance(speed, time)}.`);



//Assignment 3.5 : Object Params, add two numbers 
//Create a function that takes an object with two number properties as arguments and prints the sum of those numbers.
let AddNumbers = (obj: { a: number, b: number }) => {
  return obj.a + obj.b
  //console.log(obj.a + obj.b);
}

const obj = { a: 1, b: 2 };
console.log(AddNumbers(obj));




// Assignment 4 : Arrays and Loops
// Create an array of favorite colors and print each color using a loop.
const favoriteColors: string[] = ["Red", "Blue", "Green"];

for (const color of favoriteColors) {
  console.log(color);
}




// Assignment 5 : Conditional Logic
// Create a function that checks if a number is positive.
function isPositive(num: number): boolean {
  return num > 0;
}

const num: number = 1;
console.log(`Is ${num} positive? ${isPositive(num) ? 'Yes' : 'No'}`);


// Assignment 6 : Objects and Interfaces
// Create an interface for a person and use it to define an object.
interface Person { // interface can only be used to define an object, not a primitive type, like string, number, boolean, etc.
  firstName: string;
  lastName: string;
  age: number;
}

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);



// Assignment 7.0: Union Type
// Define a type that can be either a number or a string.
type NumberOrString = number | string;

const value1: NumberOrString = 10;
const value2: NumberOrString = "hello";

console.log(value1);
console.log(value2);



// Assignment 7.1 : Union Type and Intersection Types 
// Create a union and intersection type for a person object.

// Union Type
type UnionPerson = {
  firstName: string;
  lastName: string;
  age: number;
} | undefined;

const unionPerson: UnionPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

 console.log(`Union Person: ${unionPerson?.firstName} ${unionPerson?.lastName}, Age: ${unionPerson?.age}`);



// Example 1: 
// Define a function that can handle different argument types and print the type of the argument.
function display(input: string): void;
function display(input: number): void;
function display(input: any): void {
  console.log(input, typeof input);
}

display("Hello, world!");
display(42);


// Assignment 8 : Optional Properties
// Define an interface for a book with an optional author property.
interface Book {
  title: string;
  author?: string;
}

const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald"
};

const book2: Book = {
  title: "To Kill a Mockingbird"
};

// One Flew Over the Cuckoo's Nest - Af Ken Kesey

console.log(book1);
console.log(book2);




// Assignment 9 : Generics
// Create a generic function that takes an array of any type and prints each element to the console.
function printArray(arr: any[]) {
  for (const element of arr) {
    console.log(element);
  }
}

const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["a", "b", "c"];

printArray(arr1);
printArray(arr2);



// Assignment 9.1 : Generic Functions
// Create a generic function that reverses an array.
function reverse(arr: any[])  {
  return arr.reverse();
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const reversedNumbers: number[] = reverse(numbersArray);
console.log(reversedNumbers);

const stringsArray: string[] = ["apple", "banana", "cherry"];
const reversedStrings: string[] = reverse(stringsArray);
console.log(reversedStrings);
