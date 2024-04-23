// Array and Object in JavaScript

// Array: Ordered collection of elements, indexed by integers
const colors = ['red', 'green', 'blue'];

// Object: Collection of key-value pairs
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
};

// Iterating through an Array
for (let i = 0; i < colors.length; i++) {
    console.log('Color:', colors[i]);
}

// Iterating through an Object (Using for...in loop)
for (let key in person) {
    console.log(key + ':', person[key]);
}

// Iterating through an Object (Using Object.keys() method)
Object.keys(person).forEach((key) => {
    console.log(key + ':', person[key]);
});

// Iterating through an Object (Using Object.entries() method)
Object.entries(person).forEach(([key, value]) => {
    console.log(key + ':', value);
});
