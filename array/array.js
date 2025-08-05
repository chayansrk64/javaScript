/**
 * Arrays are Not Constants
 * It does NOT define a constant array. It defines a constant reference to an array;
 * Because of this, we can still change the elements of a constant array.
 * 
 * What is an Array?
 * Arrays are generally described as "list-like objects"; they are basically single objects that 
 * contain multiple values stored in a list.
 * 
 */


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
    for(let i = 0; i < fLen; i++){
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>"
// document.getElementById("demo").innerHTML = text;
}

{
   const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let text = "<ul>";
    fruits.forEach(myFunction);
   
    text += "</ul>";

    // document.getElementById("demo2").innerHTML = text;

    function myFunction(value) {
    text += "<li>" + value + "</li>";

}
}

// JavaScript has a built-in array constructor;
const points = new Array(1, 2);
// let p = document.getElementById('array').innerHTML = points;
// console.log(Array.isArray(points))
// console.log(points instanceof Array);

{
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
    for(let i in myObj.cars){
        let arr = myObj.cars[i].models;
        // console.log(arr)
        if(arr[1]){
            for(let j in arr){
            // console.log(arr[j])
                 }
            break;
        }
        

        // for(let j in arr[0]){
        //     console.log(arr[j])
        // }
    }

}
{
    
    let x = "";
    const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
    ]
    }

    for(let i in myObj.cars){
      x += "<h2>" + myObj.cars[i].name + "</h2>"
        for(let j in myObj.cars[i].models){
            x += "<p>" + myObj.cars[i].models[j] + "</p>"
        }
    }

    // let title = document.getElementById("container").innerHTML = x;

}

// multidimensional array
{
    const random = ["tree", 795, [0, 1, 2]];
    // console.log(random[2][2])
}

// converting between strings and arrays ==========
{
    const data = "Manchester, London, Liverpool, Birmingham, Leeds, Carlisle";
    const cities = data.split(","); // returns an array
     
    // console.log(cities)
    const commaSeparated = cities.join(","); // returns string comma separated
    // console.log(commaSeparated)

    const str = "Bangladesh";
    let arr = str.split(",")
   let backToString = arr.join(",")

   const myArr = ["Manik", "Suhel"];
   let arrToStr = myArr.join(",");
   let strToArr = arrToStr.split(",")
//    console.log(strToArr)

}
