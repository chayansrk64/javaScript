/**
 *  ============= JavaScript Arrow Function =============
 * Arrow functions were introduced in ES6.
 * Arrow functions allows a shorter syntax for function expressions.
 * YOu don't need the function keyword, the return keyword, and the curly brackets:
 * 
 * let myFunction = () => "text" ;
 * 
 *  */

let myFunction = (a, b) => a * b;
// console.log(myFunction(3,4))

{
    // before arrow:
    // Functionto compute the product of a and b;
    let myFunction2 = function(a, b){ return a * b}
}
{
    // with Arrow :
    let myFunction = (a, b) => a * b;

}

{
    // Before arrow:
    let hello = function(){
        return "Hello World!"
    }
}
{
    // With arrow function:
    let hello = () => {
        return "hello World!"
    }
}

// NOTE: Arrow Functions Return Value by Default:
{
    let hello = () => "Hello World!";
}


/**
 *  // What About This?
 * The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
 * 
 * 
 */
{
    // Regular Function:
    // With a regular function this represents the object that calls the function:
    let hello = function(){
        document.getElementById('demo').innerHTML += this;
    }

    // The window object calls the function:
    window.addEventListener("load", hello);

    // A button object calls the function:
    document.getElementById('btn').addEventListener('click', hello);
}


{
    // Arrow Function:
    // With an arrow function this represents the owner of the function:

    hello  = () => {
        document.getElementById('arrow-demo').innerHTML += this;
    }

    // the window object calls the function:
    window.addEventListener('load', hello);

    // A button object calls the function:
    document.getElementById('arrow-btn').addEventListener('click', hello)


}

// NOTE: Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.