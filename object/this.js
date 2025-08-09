// this in JavaScript Objects

/**
 * What is this?
 * In JavaScript, the this keyword refers to an object.
 * the This keyword refers to different objects depending on how it is used:
 * 
 * # Alone, this refers to the global object
 * # in a function, This refers to the global object
 * # In a function, in strict mode, this is undefined.
 * # In an object method, this refers to the object.
 * # In an event, this refers to the element that received the event
 * Methods like call(), apply(), and bind() can refer this to any object
 * 
 * NOTE: this is not a variable. this is a keyword. you cann't change the value of this.
 * 
 * 
 * 
 */


// Object method binding
// In these examples, this is the person object:
{
    const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
// console.log(person)
// console.log(person.myFunction())
}

/**
 * Explicit Function Binding
 * The call() and apply() methods are predefined JavaScript methods.
 * They can both be used to call an object method with another object as argument.
 */
  

// The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:

  
{
    const person1 = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    const person2 = {
        firstName: "Jhon",
        lastName: "Doe"
    }

    let result = person1.fullName.call(person2)
    // console.log(result)

}

// Function Borrowing
/**
 *  With the bind() method, an object can borrow a method from another object.
    This example creates 2 objects (person and member).
    The member object borrows the fullname method from the person object:
 */

{
    const person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    const member = {
        firstName: "Hege",
        lastName: "Nilsen",
    }

    let fullName = person.fullName.bind(member)
    // console.log(fullName())

}