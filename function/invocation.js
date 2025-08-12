/**
 * =========== JavaScript Function Invocation ==========
 * # The code inside a JavaScript function will execute when "something" invokes it.
 * 
 * Invoking a JavaScript Function
 * The code inside a function is not executed when the function is defined.
 * The code inside a function is executed when the function is invoked.
 * It is common to use the term "call a function" instead of "invoke a function".
 * It is also common to say "call upon a function", "start a function", or "execute a function".
 *  # In this tutorial, we will use invoke, because a JavaScript function can e invoked without being called.
 * 
 */

// Invoking a Function as a Function
{
    function myFunction(a, b){
        return a * b;
    }
    myFunction(10, 2) // will return 20
 
    /**
     * The function above does not belong to any object. But in JavaScript there is always a default global object.
     * In HTML the default global object is the HTMl page itself, so the function above "belongs" to the HTML page.
     * In a browser the page object is the brower window. The function above automatically becomes a window function.
     * 
     */

    // myFunction() and window.myFunction() is the same function:
    function myFunction(a, b) {
        return a * b;
        }
    // window.myFunction(10, 2);    // Will also return 20

}


/**
 * ========= What is This? ===========
 * 
 * In JavaScript, the 'this' keyword refers to an object.
 * the 'this' keyword refers to different objects depending on how it is used.
 * Alone, 'this' refers to the global object
 * In a function, 'this' refers to the global object.
 * In a function strict mode, 'this' is undefined.
 * In an object method, 'this' refers to the object.
 * In an event, 'this' refers to the element that received the event.
 * 
 * Methods like call(), apply(), and bind() can refer this to any object.
 * 
 *  NOTE: 'this' is not a variable. 'This' is a keyword. You cann't change the value of 'this'.
 * 
 * 
 */

//  =======  The Global Object ===========
{
// When a function is called without an owner object, the value of this becomes the global object.
// In a web browser the global object is the browser window.
// This example returns the window object as the value of this:

    // let x = myFunction(); // x will be the window object

    // function myFunction(){
    //     return this;
    // }

}

// Invoking a Function as a Method
{
// In JavaScript you can define functions as object methods.
// The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"

}
{
    const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this
  }
}
// This will return [object Object] (the owner object)
myObject.fullName();         
}

// Invoking a Function with the Constructor
{
    // If a function invocation is preceded with the new keyword, it is a constructor invocation.
    // It looks like you create a new function, but since JavaScript functions are objects you acturally create a new object:


    // This is a function constructor:
    function myFunction(arg1, agr2){
        this.firstName = arg1;
        this.lastName = agr2;
    }

    // This create a new object
    const myObj = new myFunction("John", "Doe");
    
    // This will return "John";
    myObj.firstName;
    // console.log(myObj)


}

 