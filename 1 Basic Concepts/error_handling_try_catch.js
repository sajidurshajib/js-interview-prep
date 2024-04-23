// Error Handling in JavaScript using try-catch

try {
    // Code that may throw an error
    let result = 10 / 0; // Division by zero will throw an error
    console.log('Result:', result); // This line will not be executed if an error occurs
} catch (error) {
    // Catching and handling the error
    console.log('An error occurred:', error.message);
    // Additional error handling or logging can be done here
} finally {
    // Code to be executed regardless of whether an error occurred or not
    console.log('This will always execute, even if an error occurs');
}

// Output will be:
// An error occurred: Division by zero
// This will always execute, even if an error occurs
