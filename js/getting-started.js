console.log("Hello, World!")
// loggin variables
var foo = "bar";
console.log(foo)

var thisVar = "first value";
var thatVar = "second value";
console.log("thisVar:", thisVar, "thatVar:", thatVar);

// loggin object
console.log({
    'Email': 'chayan@gmail.com',
    'Groups': {},
    'id': 33,
    'isHiddenInUI': false,
    'IsSiteAdmin': false,
    'Title': 'User1'
})
// loggin HTML elements
console.log(document.body);

// Section 1.2: Using the DOM API =========

/**
 * DOM stands for Document Object Model. It is an object-oriented representation of structured documents like XML and HTML.
 * Setting te textContent of an HTML element is one way to output text on web page.
 * 
 */

// create content;
document.getElementById('paragraph').textContent = "Hello, World!";

// create element;
var element = document.createElement('p')
element.textContent = "This is a paragraph";
document.body.appendChild(element);

var createDiv = document.createElement('div');
document.body.appendChild(createDiv)

var createParagraph = document.createElement('p')
createParagraph.textContent = "Another paragraph in div";
createDiv.appendChild(createParagraph);

var createUl = document.createElement('ul');
document.body.appendChild(createUl);
var createLi = document.createElement('li');
var createLi2 = document.createElement('li');
createLi.textContent = "list-1";
createLi2.textContent = "list-2";
createUl.appendChild(createLi);
createUl.appendChild(createLi2);


// Section 1.3: Using window.alert() ========

// window.alert("alert from window");
// alert("alert from window2");

// Section 1.4: Using window.prompt()========
// An easy way to get an input form a user by using the prompt() method.
// prompt(text, [default]) syntax;

// var inputFromUser = prompt("How old are you?");
// console.log(inputFromUser)

// Section 1.5: Using window.confirm() =======
// result = window.confirm("are you sure?")

// Section 1.6: Using the DOM API (with graphical text: Canvas, SVG, or image file) =========

// 1. First build a canvas for holding image pixel information.
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 300;

//  2. Then select a context for the canvas, in this case two-dimensional:
var ctx = canvas.getContext('2d');
// 3. Then set properties related to the text:
ctx.font = '30px Cursive';
ctx.fillText("Hello, World by Canvas", 50, 50);
// 4. Then insert the canvas element into the page to take effect:
document.body.appendChild(canvas);







