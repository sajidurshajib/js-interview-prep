// Variables and Constants in JavaScript

// Variable: Can be reassigned a new value
let age = 25;

// Constant: Cannot be reassigned once initialized
const PI = 3.14;

// Variables can be reassigned
age = 30;

// Constants cannot be reassigned
// This will throw an error
// PI = 3.14159;

// Using var
function varScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Outputs: 10 (accessible outside block)
}

varScope();

console.log(x); // Outputs: 10 (global scope)

// Using let
function letScope() {
    if (true) {
        let y = 20;
    }
    // console.log(y); // Throws ReferenceError: y is not defined (not accessible outside block)
}

letScope();

// console.log(y); // Throws ReferenceError: y is not defined (not in global scope)
