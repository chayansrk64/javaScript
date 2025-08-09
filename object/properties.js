// JavaScript Object Properties

/**
 * An Object is an Unordered Collection of Properties
 * Properites are the most important part of JavaScript objects.
 * Properties can be changed, added, deleted, and some are read only.
 */

// Accessing JavaScript Properties
 
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}

let x = "eyeColor";
let y = "firstName";
let z = "lastName";

// objectName.property
let age = person.age;

// objectName["property"]
let lastName = person["lastName"];

// objectName[expression]
let eyeColor = person[x]

// Adding New Properties
person.natinality = "English";


// Property Default Values
// A value given to a property will be a default value for all objects created by the constructor:

{
    function Person(firstName, lastName, age, eyeColor){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.eyeColor = eyeColor,
        this.natinality = "English"
    }
    let person1 = new Person("Jhon", "Doe", 20, "blue" )
    let person2 = new Person("Manik", "Mia", 24, "black" )
    // console.log(person1, person2)

}

// Deleting Properties:
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    delete person.firstName;
    delete person["age"]
    // console.log(person)
}

// Nested Objects
{
    myObj = {
    name:"John",
    age:30,
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
  }
}


}