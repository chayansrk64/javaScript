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
    // console.log(x == y) // false
}


// Extracting String Characters
/**
 * There are 4 methods for extracting string characters:
 * 1. The at(position) Method
 * 2. The charAt(position) Method
 * 3. The charCodeAt(position) Method
 * 4. Using property access [] like in arrays
 * 
 */

// JavaScript String charAt()
{
    let text = "HELLO WORLD";
    // 4 methods:
    let at = text.at(2);
    let charAt = text.charAt(2);
    let charCodeAt = text.charCodeAt(5);
    let char = text[6];

    let fromLastPosition = text.at(-1) // L
    let charAtNegative = text.charAt(text.length - 1);
    let codePointAt = text.codePointAt(0);
    
}

// JavaScript String concat()
{
    let text1 = "Tada";
    let text2 = "Tata";
    // console.log(text1.concat(" " , text2))
}

// Extracting String Parts
/**
 * There are 3 methods for extracting a part of a string:
 * 1. slice(start, end)
 * 2. substring(start, end);
 * 3. substr(start, length)
 */

// JavaScript String slice()
{
    let text = "Apple, Banana, Orange, Kiwi";
    let part = text.slice(0, 5); // Apple
    let negativeSlice = text.slice(-4) // Kiwi
}

// JavaScript String substring()
// substring() is similar to slice()
// substr() also similar to slice()
{
    let text = "Apple, Banana, Orange, Kiwi";
    let part = text.substring(0, 5); // Apple
}

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:
// we also have trimStart() method which remove whitespace form start
// trimEnd() method which remove whitespace from the end;
{
    let trimTxt = "   Bangladesh     ";
    let removeWhiteSpace = trimTxt.trim();
    let removeFromStart = trimTxt.trimStart();
    let removeFromEnd = trimTxt.trimEnd();
}

// JavaScript String Padding
{
    let text = "5";
    let padStart = text.padStart(3, "0") // 005
    let padEnd = text.padEnd(3, "0") // 500
     
}

// JavaScript String repeat()
{
    let repeatTxt = " Hello World ";
    let repeated = repeatTxt.repeat(3);
    // console.log(repeated)
}

// Replacing String Content
// replace the first match
// case sensitive;
{
    let text = "Please visit Microsoft";
    let replaceTxt = text.replace("Microsoft", "W3School")
    // console.log(replaceTxt)
}
// to replace case insensitive, use a regular expression with an /i flag(insensitive)

{
     let text = "Please visit Microsoft";
     let newText = text.replace(/MICROSOFT/i, "W3School");
    //  console.log(newText)
}

// To replace all matches, use a regular expression with a /g flag (global match)
{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3School.com")
    // console.log(newText)
}

{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    text = text.replaceAll("cats" , "dogs")
    text = text.replaceAll("Cats" , "Dogs") // case sensitive
    // console.log(text)
}

// JavaScript String split() ====
{
    let text = "Split text on";
    // console.log(text.split(" ")) // split text where space are avaiable;
    // console.log(text.split(",")) // split text where comma are avaiable;
    // console.log(text.split("|")) // split text where pipe are avaiable;
    // console.log(text.split("")) // If the separator is "", the returned array will be an array of single characters:

}