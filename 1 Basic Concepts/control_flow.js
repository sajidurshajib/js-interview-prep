// Control Flow and Loops in JavaScript

// If Statement
let x = 10;
if (x > 5) {
    console.log('x is greater than 5'); // Output: x is greater than 5
}

// If-Else Statement
let y = 3;
if (y % 2 === 0) {
    console.log('y is even');
} else {
    console.log('y is odd'); // Output: y is odd
}

// If-Else If-Else Statement
let z = 15;
if (z < 10) {
    console.log('z is less than 10');
} else if (z < 20) {
    console.log('z is less than 20'); // Output: z is less than 20
} else {
    console.log('z is greater than or equal to 20');
}

// Switch Statement
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log("It's Monday");
        break;
    case 'Tuesday':
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's some other day");
}

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// While Loop
let count = 0;
while (count < 3) {
    console.log(count); // Output: 0, 1, 2
    count++;
}

// Do-While Loop
let num = 1;
do {
    console.log(num); // Output: 1
    num++;
} while (num < 1);

// For-In Loop (Iterating over object properties)
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
};
for (let key in person) {
    console.log(key + ': ' + person[key]); // Output: name: John, age: 30, city: New York
}

// For-Of Loop (Iterating over iterable objects like arrays)
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color); // Output: red, green, blue
}

// forEach Loop (Iterating over array elements with a callback function)
colors.forEach(function (color) {
    console.log(color); // Output: red, green, blue
});

// Control Flow and Loops in JavaScript

// Single Line If-Else
let a = 20;
console.log(a > 15 ? 'a is greater than 15' : 'a is not greater than 15');

// Single Line For Loop
for (let j = 0; j < 3; j++) console.log('Index: ' + j);

// Single Line While Loop
let counter = 0;
while (counter < 4) console.log('Counter: ' + counter), counter++;

// Single Line Do-While Loop
let number = 0;
do console.log('Number: ' + number), number++;
while (number < 3);
