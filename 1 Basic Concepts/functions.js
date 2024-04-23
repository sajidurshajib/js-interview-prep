// Functions in JavaScript

// 1. Function Declaration
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('John'); // Outputs: Hello, John!

// 2. Function Expression
const greet2 = function (name) {
    console.log('Hi, ' + name + '!');
};

greet2('Alice'); // Outputs: Hi, Alice!

// 3. Arrow Function (ES6+)
const greet3 = (name) => {
    console.log('Hey, ' + name + '!');
};

greet3('Bob'); // Outputs: Hey, Bob!

// 4. Anonymous Function
const greet4 = function (name) {
    console.log('Hola, ' + name + '!');
};

greet4('Anna'); // Outputs: Hola, Anna!

// 5. Immediately Invoked Function Expression (IIFE)
(function (name) {
    console.log('Bonjour, ' + name + '!');
})('Alex'); // Outputs: Bonjour, Alex!

// 6. Function with Default Parameters (ES6+)
function greet5(name = 'World') {
    console.log('Salut, ' + name + '!');
}

greet5(); // Outputs: Salut, World!
greet5('Daniel'); // Outputs: Salut, Daniel!

// 7. Function with Rest Parameters (ES6+)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log('Sum:', total);
}

sum(1, 2, 3); // Outputs: Sum: 6

// 8. Function with Return Value
function multiply(x, y) {
    return x * y;
}

let result = multiply(4, 5);
console.log('Product:', result); // Outputs: Product: 20

// 9. Function as a Method
const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
};

console.log('Addition:', calculator.add(10, 5)); // Outputs: Addition: 15
console.log('Subtraction:', calculator.subtract(10, 5)); // Outputs: Subtraction: 5

// 10. Callback Function
function callbackExample(callback) {
    console.log('Inside callbackExample function');
    callback();
}

function callbackFunction() {
    console.log('This is a callback function');
}

callbackExample(callbackFunction); // Outputs: Inside callbackExample function
//         This is a callback function
