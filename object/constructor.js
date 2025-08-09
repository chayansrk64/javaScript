// JavaScript Object Constructors

/**
 * Object constructor functions
 * Sometimes we need to create many objects of the same type
 * To create an object type we use an object constructor function
 * It is considered good prctice to name construtor functions with an upper-case first letter.
 * 
 */




// Constructor Function Methods
{
    function Person(firstName, lastName, age, eyeColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.fullName =  function(){
            return this.firstName + " " + this.lastName;
        }
    }
    // add new property:
    Person.prototype.nationality = "Bangladeshi";
    // Adding a new method must be done to the constructor function prototype:
    Person.prototype.changeName = function(name){
        return this.firstName = name
    }
    

    const person1 = new Person("Arpita", "Sikdar", 17, "black" )
    const person2 = new Person("Sally", "Rally", 48, "green")
    
    // console.log(person2.changeName("Tota"))
}

// Property Default Values
{
    function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English"; // this is default value
}
}

//================ Built-in JavaScript Constructors ===============

/**
 * new Object() // A new Object object
 * new Array() // A new Array object
 * new Map() // A new Map object;
 * new Set() // A new Set object;
 * new Date() // A new Date object;
 * new RegExp // A new RegExp object;
 * new Functino // A new Function object;
 * 
 * 
 */
// NOTE: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.