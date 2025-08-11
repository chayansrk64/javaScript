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


/**
 * JavaScript Object Properties
 * Property Management Methods:
 *  
 * // Adding or changing an object property:
 * # Object.defineProperty(object, property, descriptor)
 * 
 * // Adding or changing object properties: 
 * # Object.defineProperties(object, descriptors)
 * 
 * // Accessing a Property:
 * # Object.getOwnPropertyDescriptors(object)
 * 
 * // Returns all properties as an array:
 * # Object.getOwnPropertyNames(object)
 * 
 * // Accessing the prototype:
 * # Object.getPrototypeOf(object)
 * 
 */


// JavaScript Object.defineProperty()
// The Object.defineProperty() method can be used to:
/**
 * * Adding a new property to an object;
 * * Changing property values;
 * * Changing property metadata;
 * * Changing object getters and setters
 * 
 *  Syntax:
 *  Object.defineProperty(object, proterty, descriptor)
 */

// Adding a new property:

{
    // create an object:
    const person = {
        firstName: "Manik",
        lastName: "Mia",
        age: 30
    }
    // console.log(person)
    // adding a new property:
    Object.defineProperty(person, "language", {
        value:"Bangla",
        enumerable: true // make it visible
    });
    // console.log(person)
     
}

// Changing a Property Value
{
    const person = {
        firstName: "John",
        lastName : "Doe",
        language : "EN"
    };

    Object.defineProperty(person, "language", {value: "BN"})
    console.log(person)

}



/**
 * Property Attributes
 * All properties have a name. In addintion they also have a value.
 * The value is one of the property's attributes.
 * Other attributes are: enumerable, configurale, and writable.
 * These attributes define how the property can be accessed (is it readable?, is it writable?)
 * In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
 * 
 * 
 * 
 */

/**
 * Changing Meta Data:
 * 
 * writable: true // property value can be changed
 * enumerable: true // property value can be changed
 * configurable: true // Property can be reconfigured
 * 
 * 
 * 
 * writable: false // property value can not be changed
 * enumerable: false // property value can be not enumerated
 * configurable: false // Property can not be reconfigured
 * 
 * 
 */
// Getters and setters can also be changed:

{
    // Defining a g etter:
    // get: function() {return language}
    // Defining a setter:
    // set: function(){return language = value}
}
 