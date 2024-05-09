// In JavaScript, hoisting means that variable and function declarations are moved to the top of their containing scope during the compilation phase. Let's look at two examples to understand this better.

// Example 1: VARIABLE Hoisting

console.log(myVariable); // Output: undefined
var myVariable = "Hello";
// Here, myVariable is declared using the var keyword and then assigned the value "Hello". However, when we try to log its value before the assignment, it prints undefined. This happens because although the declaration is hoisted to the top, the assignment isn't. So, JavaScript knows that myVariable exists, but it hasn't been assigned a value yet.

// Example 2: FUNCTION Hoisting

myFunction(); // Output: "Function is hoisted!"
function myFunction() {
  console.log("Function is hoisted!");
}
// In this example, myFunction() is called before its declaration, but it still executes without any errors. This is because function declarations, unlike variable declarations, are fully hoisted. So, JavaScript moves the entire function declaration to the top of its scope during compilation.