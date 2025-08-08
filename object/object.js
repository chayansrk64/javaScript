
/**
 *  JavaScript Object Definition
 *  How to define a Object?
 *  # using an Object Literal;
 *  # using the new Keyword;
 *  # using an Object Constructor; 
 * 
 *  */

// Using an Object Literal
// an object literal is a list of named valued inside curly braces { }
// In object terms, the named values are called key:value pairs.
// these key:value pairs are called object properties.

{
    const myObject = {
        firstName:"John",
        lastName:"Doe",
        age:50,
        eyeColor:"blue"
    }
}
// object literal
{
    const person = {};
    person.name = "Manik";
    person.age = 34;
    person.profession = "Teacher"
    // console.log(person)
}

// Using the new Keyword
{
    const person = new Object({
        firstName: "Jhon",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    })
    
    // console.log(person)
}

// Accessing Object Properties
/***
 * you can access object property in two ways (dot notation and squre bracket)
 *  1. objectName.propertyName
 *  2. objectName["propertyName"]
 * 
 *  */ 

{
    const person = new Object({
        firstName: "Jhon",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    })
     
    // console.log(person["firstName"])
    // console.log(person["lastName"])
    // console.log(person)
}

// JavaScript Object Methods
// Methods are actions that can be performed on objects.
// Methods are function definitions stored as property values.
// 

{
    const person = new Object({
        firstName: "Jhon",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        fullName: function (){ return this.firstName + " " + this.lastName}
        // this refers to the person object
    })
    // console.log(person.fullName())
}
/**
 * Summary:
 * Objects are containers for Properties and Methods
 * Properties are named Values
 * Methods are Functions stored as Properties.
 * Properties can be primitive values, functions, or even other objects.
 */


/**
 * In JavaScript, Objects are King.
 * 
 * If you Understand Objects, you Understand JavaScript.
 * In JavaScript, almost "everything" is an object.
 * 
 * * Objects are objects
 * * Maths are objects
 * * Functions are objects
 * * Dates are objects
 * * Arrays are objects
 * * Maps are objects
 * * Sets are objects
 * 
 * All javaScript values, except primitives, are objects.
 */

/**
 *  JavaScript primitives
 * # A primitive value is a value that has no properties or methods.
 * 3.14 is a primitive value
 * A primitive data type is data that has a primitive value.
 * 
 * JavaScript defines 7 types of primitive data types:
 * 1. string
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 * 7. bigint
 * 
 */