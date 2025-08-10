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
    console.log(person.fullName())
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
    console.log(person.address())
}
