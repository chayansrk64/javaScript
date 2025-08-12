// JavaScript Function Parameters
// A javaScript function does not perform any checking on parameter values (arguments).

// ======= Function Parameters and Arguments ========


{
    function functionName(parameter1, parameter2, parameter3) {
        // code to be executed
    }
    // function parameters are the names listed in the funciton definition.
    // function arguments are the real values passed to (and received by) the function

}

// Parameter Rules
/**
 * JavaScript function definitions do not specify data types for parameters.
 * JavaScript functions do not perform type checking on the passed arguments.
 * JavaScript functions do not check the number of arguments received.
 * 
 * # Default Parameters
 * 
 * If a function is called with missing arguments (less than declared), the missing values are set to undefined.
 * Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
 * 
 * 
 * 
 */
{
    function myFunction(x, y){
        if(y === undefined){
            y = 2
        }
    }
}

// Default parameter values
// if y is not passed or undefined, then y = 10.
{
    function myFunction(x, y = 10){
        return x + y;
    }
    myFunction(5)
}

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indedinite number of arguments as an array:

{
    function sum(...args){
        let sum = 0;
        for(let arg of args) sum += arg;
        return sum;
    }
    let x = sum(4, 9, 16, 25, 29, 100, 66, 77)

}
/**
 *  ===== The Arguments Object =====
 * The Arguments Object
 * JavaScript functions have a build-in object called the arguments object.
 * The argument object contains an array of the arguments used when the function was called (invoked)
 * 
 * 
 */

{
    x = findMax(1, 123, 500, 115, 44, 88)

    function findMax(){
        let max = -Infinity;
        for(let i = 0; i < arguments.length; i++){
            if(arguments[i] > max){
                max = arguments[i]
            }
        }
        return max;
    }
    // console.log(x)
}
{
    x = sumAll(1, 123, 500, 115, 44, 88)
    function sumAll(){
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum += arguments[i]
        }
        return sum;
    }
    console.log(x)
}