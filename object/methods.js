/**
 * JavaScript Object Methods
 *  General Methods:
 * 
 *  // Copies properties from a source object to a target object
 *  # Object.assign(target, source)
 * 
 *  // Create an object from an existing object
 *   # Object.create(object)
 * 
 *  // Returns an array of the key/value pairs of an object
 *  # Object.entries(object)
 * 
 *  // Create an object from a list of keys/values 
 *  # Object.fromEntries()
 * 
 *  // Returns an array of the property values of an object
 *  # Object.values(object)
 * 
 * // Groups object elements according to a function
 *  # Object.groupBy(object, callback)
 *  
 */


// JavaScript Object.assign()
// The Object.assign() method copies properties from one or more source objects to a target object;


{
    // create target object
    const person1 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    // create source object
    const person2 = {firstName: "Anne",lastName: "Smith"}
    // assign source to target
    Object.assign(person1, person2) //(target, source)
    // console.log(person1, person2)
}

// JavaScript Object.entries()
// Object.entries() returns an array of the key/value pairs in an object:
{
    const person = {
        firstName : "John",
        lastName : "Doe",
        age : 50,
        eyeColor : "blue"
    };
    let arr = Object.entries(person);
    // console.log(arr)

    // using for loop:
    let array = []
    for(let key in person){
        if(person.hasOwnProperty(key)){
            array.push([key, person[key]])
        }
    }
    // console.log(array)

// output:
// [
//   [ 'firstName', 'John' ],
//   [ 'lastName', 'Doe' ],  
//   [ 'age', 50 ],
//   [ 'eyeColor', 'blue' ]  
// ]

}

// JavaScript Object.fromEntries()
{
    const fruits = [
        ["apples", 300],
        ["pears", 900],
        ["bananas", 500]
    ];

    const myObj = Object.fromEntries(fruits);
    // console.log(myObj);

    // using for loop:
    let obj = {};
    for(let i = 0; i< fruits.length; i++){
        let key = fruits[i][0];
        let value = fruits[i][1];
        obj[key] = value;
    }
    // console.log(obj)




}



// JavaScript Object.values()
// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
{
    const person = {
        firstName : "John",
        lastName : "Doe",
        age : 50,
        eyeColor : "blue"
    };
    let values = Object.values(person)
    let keys = Object.keys(person)
    

}


const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Object.groupBy(fruits, myCallback);
// console.log(result)






















// JavaScript Object Methods
/**
 * Object methods are actions that can be performed on objects.
 * A method is a function definition stored as a property value
 */

{
    const person = {
        fisrtName: "Jhon",
        lastName: "Doe",
        age: 30,
        fullName: function(){
            return this.fisrtName + " " + this.lastName;
        }
    }
    // this refers to the person object:
    // Accessing Object Methods
    // console.log(person.fullName())
}

// Adding a Method to an Object
{
    const person = {
        fisrtName: "Jhon",
        lastName: "Doe",
        age: 30,
        fullName: function(){
            return this.fisrtName + " " + this.lastName;
        }
    }
    person.address = function(){return "KG, 32"}
    // console.log(person.address())
}
