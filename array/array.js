const cars = new Array();

cars[0] = "Volvo";
cars[1] = "Sab";
cars[2] = "Audi";
// console.log(cars)

// using new Keyword;
const arr = new Array(12, 3,44,5);
// console.log(arr)
const arr2 = new Array("asdf");
// console.log(arr2);



// Converting an Array to a String
{
    const arr = new Array();
    arr[0] = "manik";
    arr[1] = "Roni";
    arr[2] = "suhel";
    // console.log(arr)
    const arrToString = arr.toString();
    // console.log(arrToString)
}

// Arrays are Objects
{
    const person = ["John", "Doe", 46, add];
    const person2 = {firstName:"John", lastName:"Doe", age:46};
    // console.log(person[0], person2.firstName)
    function add(a, b){
        return a+b;
    }
    // console.log(person[person.length-1])
     
}

// converting an array to string;
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const arrayToString = fruits.toString();
}

// Looping Array Elements
{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;
    let text = "<ul>";
    for(let i = 0; i <= fLen; i++){
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>"
document.getElementById("demo").innerHTML = text;
}