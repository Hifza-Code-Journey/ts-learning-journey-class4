// If revision
let firstName: string = "Hifza";  // Corrected variable name
let lastName: string = "Zafar";

// Checking if the person is allowed based on first and last name
if (firstName === "Hifza" && lastName === "Zafar") {
    console.log("You're not allowed.");
} else {
    console.log("You're allowed.");
}


// Functions

// Function without parameters
function greet() {
    console.log("Hello Sir Hamzah");
}

// Function with a parameter
function greetWithName(name: string) {
    console.log("Hello", name);
}

// Function for simple addition
function sum() {
    console.log(2 + 2);
}

// Function to add two numbers
function add(num1: number, num2: number) {
    console.log(num1 + num2);
}

// Function to add two numbers and return the result
function plus(num1: number, num2: number): number {
    return num1 + num2;
}

// Function for multiplication
function multiply(num1: number) {
    console.log(num1 * 2);
}

// Function for division (Note: Corrected the operation to division)
function division(num1: number, num2: number) {
    console.log(num1 / num2);
}

// Function for subtraction (Note: Corrected the operation to subtraction)
function sub(num1: number, num2: number) {
    console.log(num1 - num2);
}

// Function for a viral message
function viral() {
    console.log("Moye Moyeee");
}

// Calling the functions
greet();
greetWithName("Hifza");
sum();
add(5, 10);
let answer = plus(55, 15);
console.log(answer);
multiply(answer);
division(7, 99);
sub(99, 0);
viral();
