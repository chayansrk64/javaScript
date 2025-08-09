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
