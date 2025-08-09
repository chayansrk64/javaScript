// JavaScript Object Definitions
/**
 * Methods for Defining JavaScript Objects:
 * 
 * # Using an Object Literal
 * # Using the new Keyword
 * # Using an Object Constructor
 * # Using Object.assign()
 * # Using Object.create()
 * # Object.fromEntries()
 * 
 */

// Using Object Literal;
{
    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
}
// Using the new Keyword
{
     const person = new Object({
        firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"
     })
     
}

// JavaScript Object.create()
/**
 * It creates a new object whose prototype is set to the object you pass in as an argument.
 */
{
    // create an object
    const person = {
        firstName: "Jhon",
        lastName: "Doe"
    };
    // create new object
    const man = Object.create(person)
    man.age = 30;
    // console.log(man)
   
}

// JavaScript Object fromEntries()
// the fromEntries() method creates an object fro iterable key/value pairs:
{
    const fruits = [
        ["apples", 300],
        ["banana", 40],
        ["strowberry", 140]
    ]
     

    const myObj = Object.fromEntries(fruits);
     
}

// JavaScript Object.assign()
// The Object.assign() method copies properties from one or more source objects to a target object.
{
    // create target object:
    const person1 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    }

    // create source object:
    const person2 = {firstName: "Manik", lastName: "Mia"};
    // assign source to target:
    Object.assign(person1, person2)
    // console.log(person1)
}
