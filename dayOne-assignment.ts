

// Assignment 0 Example : return the area of a circle
const circ = (diameter: number) => {
  return diameter * Math.PI;  // your code 
};

// console.log(area('hello'));
console.log(circ(7.5)); 




// Assignment 1 : Variable Declaration
// Declare variables to store a name and age.

// Your code here : variable declaration

console.log(`My name is ${name} and I am ${age} years old.`);



// Assignment 2 : Type Annotation and Inference
// Infer types and explicitly annotate types for variables.

// Your code here : type annotation

console.log(`My favorite movie is ${favoriteMovie} released in ${releaseYear}.`);



// Assignment 3 : Functions and Parameters
// Create a function that calculates the area of a rectangle.

// Your code here : function

const width = 5;
const height = 10;
console.log(`The area of the rectangle is ${calculateArea(width, height)}.`);



//Assignment 3.5 : Object Params, add two numbers 
//Create a function that takes an object with two number properties as arguments and prints the sum of those numbers.

// Your code here : function

const obj = { a: 1, b: 2 };
console.log(AddNumbers(obj));




// Assignment 4 : Arrays and Loops
// Create an array of favorite colors and print each color using a loop.

// Your code here : array

// Your code here : loop




// Assignment 5 : Conditional Logic
// Create a function that checks if a number is positive.

// Your code here : function

const num: number = 1;
console.log(`Is ${num} positive? ${isPositive(num) ? 'Yes' : 'No'}`);




// Assignment 6 : Objects and Interfaces
// Create an interface for a person and use it to define an object.

// Your code here : interface

// Your code here : object



console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);



// Assignment 7.0: Union Type
// Define a type that can be either a number or a string.

// Your code here : type

// Your code here : variable declaration and assignment

console.log(value1);
console.log(value2);






// Assignment 8 : Optional Properties
// Define an interface for a book with an optional author property.

// Your code here : interface Book with optional property

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



// Assignment 9 : Union Type and Intersection Types 
// Read the code and understand the output and the types used. Grasp the concept of Union and Intersection types.

// Define the Person type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// Define the Address type
type Address = {
  street: string;
  city: string;
};

// Define the UnionPerson type as a union of Person and undefined
type UnionPerson = Person | undefined;

// Define the IntersectionPerson type as an intersection of Person and Address
type IntersectionPerson = Person & Address;


// Example usage
const person1: UnionPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const person2: UnionPerson = undefined;

const person3: IntersectionPerson = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  street: "123 Main St",
  city: "Anytown"
};

console.log(person1); // Output: { firstName: 'John', lastName: 'Doe', age: 30 }
console.log(person2); // Output: undefined
console.log(person3); // Output: { firstName: 'Jane', lastName: 'Smith', age: 25, street: '123 Main St', city: 'Anytown' }

// console.log(`Union Person: ${unionPerson?.firstName} ${unionPerson?.lastName}, Age: ${unionPerson?.age}`);
