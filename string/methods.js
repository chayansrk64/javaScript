/**
 * Strings are for stroring text;
 * Strings are written with quotes;
 * 
 */
{
    let text = 'Jhon Doe';
}
/**
 * Template Strings
 * Templates were introduced with ES6;
 * Templates are strings enclosed in backticks (`This is a template string`)
 * Template allow single and double quotes inside a string:
 * 
 */
{
    let text = `He's often called "Jhonny"`;
}
// String Length
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // console.log(text.length)
}
// Escape Characters (\ backslash escape character)
{
    let text = "we are the so-called \"Vikings\" from the north.";
    let example1 = "\'"
    let example2 = "\""
    let example3 = "\\"
    // console.log(example2, example3)
}
{
    // \" inserts a double quote in a string:
    let str1 = "We are the so-called \"Vikings\" from the north";
    // \' insert a single quote in a string:
    let str2 = "it\'s alright";
    // \\ insert a single quote in a string:
    let str3 = "The character \\ is called backslash.";
    
}

// Six other escape sequences are valid in javaScript;
{
    // \b
    // console.log("tada \b tata") // backspace
    // console.log("tada \f tata") // Form Feed;
    // console.log("tada \n tata") // New Line;
    // console.log("I love Bangladesh \r tata") // Carrage Return;
    // console.log("I love Bangladesh \t tata") // Horizontal Tobulator;
    // console.log("I love Bangladesh \v tata") // Vertical Tobulator;
}

// Template Strings
{
    let text = `
    this is an example of template string.
    `
}
// JavaScript Strings as Objects
// Normally, javaScript strings are primitive values, created form literals:
let x = "John";
let y = new String("John") // do not create String object; slow down your code and execution speed.
{
    // Comparing two JavaScript objects always returns flase;
    let x = new String("Doe");
    let y = new String("Doe");
    console.log(x == y) // false
}
