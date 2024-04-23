// JavaScript data types

// Number: Represents both integer and floating-point numbers
let age = 25;

// String: Represents a sequence of characters enclosed within quotes
let name = 'John';

// Boolean: Represents true or false values
let isStudent = true;

// Null: Represents an intentional absence of any value
let car = null;

// Undefined: Represents a variable that has been declared but not assigned a value
let address;

// Object: Represents a collection of key-value pairs
let person = {
    name: 'Alice',
    age: 30,
    isStudent: false,
};

// Array: Represents a collection of elements, indexed by integers
let colors = ['red', 'green', 'blue'];

// Function: Represents a block of code that can be invoked
function greet() {
    return 'Hello!';
}

// ==================

// Symbol: Represents a unique identifier
// const id = Symbol('id');

// Symbols are a unique data type introduced in ECMAScript 2015 (ES6).
// They represent a new primitive type in JavaScript, alongside numbers, strings, booleans, null, and undefined.

// The purpose of symbols is to create unique identifiers that can be used as property keys for objects.
// Unlike strings, symbols are guaranteed to be unique, which helps prevent naming collisions in code.

// Here's a brief explanation of symbols:

// Uniqueness: Each symbol value returned by Symbol() is unique, even if they have the same description.
// Immutable and Unforgeable: Symbols are immutable and cannot be changed. They are also unforgeable, meaning you cannot simulate a symbol value with another value.
// Property Keys: Symbols are often used as unique property keys in objects to prevent unintended conflicts with other properties.
// Privacy: Symbols can be used to create "private" properties and methods in objects, as they are not enumerable in for...in loops or accessible via Object.getOwnPropertyNames().

// Creating a symbol
const id = Symbol('id');

// Using symbols as property keys
const user = {
    name: 'John',
    [id]: 123, // Using a symbol as a property key
};

// Accessing the symbol property
console.log(user[id]); // 123

// Symbols are not enumerable in for...in loops
for (let key in user) {
    console.log(key); // Will only log 'name', not the symbol
}
