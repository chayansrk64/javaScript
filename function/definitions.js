/**
 *  JavaScript Function Definitions
 *  
 * JavaScript functions are defined with the function keyword.
 * 
 *  You can use:
 *  1. function declaration or
 *  2. function expression
 * 
 * 
 * */

// Function Declarations

// Earlier in this tutorial, you learned taht functions are declared with the following syntax:
/**
 *  function functionName(parameters) {
 *      // code to be executed
 *  }
 * 
 *  Declared functions are not executed immediately. They are "saved for later use",
 * and will be executed later, when they are invoked (called upon).
 *  
 */

// Function Expressions

/**
 *  A JavaScript function can also be defined using an expression
 *  A function expresion can be stored in a variable
 * 
 *  const x = function (a, b) {return a + b};
 * 
 */


{
    const x = function(a, b){return a + b};
    const z = x(4,5);

    // N:B: After a function expression has been stored in a variable, the variable can be used as a function:
     
    // N:B: The function above is actually an anonymous function ( a function without name ).
    // N:B: Function stored in variable do not need function names. They are always invoked (called) using the variable name.

}


/*
 * The Function() Constructor 
 * As you have seen in the previous examples, JavaScript functions are fedined with the function keyword
 * Functions can also be defined with a built-in JavaScript function constructor called Function().
 * 
 */

{
    const myFunction = new Function("a", "b", "return a * b");
    let x = myFunction(5, 6);
    // console.log(x)
}


