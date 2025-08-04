
// for-in loop for the object;

const person = {
    fname: "Manik",
    lname: "Mia",
    age: 27
}

let text = "";
for(let x in person){
    text += person[x] + " ";
}
// console.log(text)


// for-in loop for the array;
{
    const numbers = [45, 4, 9, 16, 25];
    for(let num in numbers){
        // console.log(numbers[num])
    }
}

// The forEach() method calls a function (a callback function) once for each array element.

{
    const numbers = [45, 4, 9, 16, 25];
    let text = "";
    numbers.forEach(myFunction)

    function myFunction(value, index, array){
        text += value + "\n";
    }
    // console.log(text)
}




// ============ Section 18.3: "for ... in" loop ===========

/***
 * ____WARNING____
 * for...in is intended for iterating over object keys, not array indexes. Using it to loop through an array is generally discouraged. It also includes properites form the prototype, so it may be necessary to check if the key is within the object using "hasOwnProperty."
 * if any attributes in the object are defined by the 'defineProperty/defineProperites method and set the param `enumerable: false`, those attributes will be inaccessible.
 * 
 */

{
    const myObj = {a: "foo", b: "bar", c: "moo"}
    // `a` is inaccessible;
    Object.defineProperty(myObj, 'a', {
        enumerable:false,
    })
    // console.log(myObj)
    for(let key in myObj){
        if(myObj.hasOwnProperty(key)){
            console.log(myObj[key])
        }
    }
}