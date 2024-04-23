// Operators in JavaScript

// Arithmetic Operators
let x = 10;
let y = 5;
let addition = x + y; // Addition: 10 + 5 = 15
let subtraction = x - y; // Subtraction: 10 - 5 = 5
let multiplication = x * y; // Multiplication: 10 * 5 = 50
let division = x / y; // Division: 10 / 5 = 2
let remainder = x % y; // Remainder: 10 % 5 = 0

// Assignment Operators
let a = 10;
a += 5; // Equivalent to: a = a + 5; (a becomes 15)
a -= 3; // Equivalent to: a = a - 3; (a becomes 12)
a *= 2; // Equivalent to: a = a * 2; (a becomes 24)
a /= 4; // Equivalent to: a = a / 4; (a becomes 6)
a %= 2; // Equivalent to: a = a % 2; (a becomes 0)

// Comparison Operators
let b = 5;
let isEqual = x === y; // Strict Equality: false (10 is not equal to 5)
let isNotEqual = x !== y; // Strict Inequality: true (10 is not equal to 5)
let isGreater = x > y; // Greater Than: true (10 is greater than 5)
let isLess = x < y; // Less Than: false (10 is not less than 5)
let isGreaterOrEqual = x >= y; // Greater Than or Equal To: true (10 is greater than or equal to 5)
let isLessOrEqual = x <= y; // Less Than or Equal To: false (10 is not less than or equal to 5)

// Logical Operators
let isTrue = true;
let isFalse = false;
let logicalAnd = isTrue && isFalse; // Logical AND: false (both conditions are not true)
let logicalOr = isTrue || isFalse; // Logical OR: true (at least one condition is true)
let logicalNot = !isTrue; // Logical NOT: false (negation of true is false)

// Conditional (Ternary) Operator
let age = 20;
let isAdult = age >= 18 ? 'Adult' : 'Minor'; // If age is greater than or equal to 18, isAdult is "Adult", otherwise "Minor"
