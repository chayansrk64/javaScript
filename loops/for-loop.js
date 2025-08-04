// while loop

let num = 0;
while(num < 5){
    // console.log(num)
    num++
}

// for loop
for(let num = 0; num < 5; num++){
    // console.log(num)
}

// even 

for(let num = 0; num <= 10; num++){
    if(num % 2 === 0){
        // console.log(num)
    }
}
// odd
{
    for(let num = 0; num <= 10; num++){
    if(num % 2 === 1){
        // console.log(num)
    }
}
}
// odd 
{
    for(let i = 1; i <= 20; i+=2){
        // console.log(i)
    }
}
// even
{
    for(let i = 2; i <= 20; i+=2){
        // console.log(i)
    }
}

{
    for(let i = 0; i<= 20; i++){
        if(i % 2 !== 0){
            // console.log('odd number', i)
        }
    }
}

 {
    let result = 0;
    for(let i = 11; i<=20; i++){
        result +=i;
    }
    // console.log('sum of numbers 11 to 20 is', result)
 }

//Dcremental while loop  
let i = 20;
while(i >= 0){
    // console.log(i)
    i--;
}

// divisible numbers;
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0){
        // console.log(i)
    }
}

// sum of divisible by 3 between 1 to 30;
{
    let sum = 0;
    for(let i = 1; i<= 30; i++){
        if(i % 3 === 0){
            sum += i
        }
    }
    // console.log(sum)
}

//  break and continue
for(let i = 1; i<= 20; i++){
    if(i >= 5){
        break; // break the loop when i>=5; loop end!
    }
    // console.log(i)
}

for(let i = 1; i<= 10; i++){
    if(i === 5){
        continue; // skip when i = 5; and rest will be output;
    }
    // console.log(i)
}

// divisible by 5;
let n = 0;
while(n < 50){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    // console.log(n)
}



// ================== W3School ====================

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = '';
for(let i = 0; i < cars.length; i++){
    text = text + cars[i] + "<br>";
}
// console.log(text)
// document.getElementById('demo').innerHTML = text;


{
    let text = "";
    for(let i = 0; i < 5; i++){
        text += "The number is " + i + '\n';
    }
    // console.log(text)
}



{
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let i = 0;
    let len = cars.length;
    let text = "";
    for(; i < len; i++){
        text += cars[i] + "<br>"
    }
    // document.getElementById('demo').innerHTML = text;
}

// you may initiate many value at expression one by coma separated;

{
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
   
    for( let i = 0, len = cars.length, text = ""; i < len; i++){
        text += cars[i] + "<br>"
    }
    // document.getElementById('demo').innerHTML = text;
}

{
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let i = 0;
    let len = cars.length;
    let text = "";
    for( ; i < len ; ){
        text += cars[i] + "<br>"
        i++
    }
    // console.log(text)
    //  document.getElementById('demo').innerHTML = text;
}


// decremented fop loop;
for(let i = 10; i >= 0; i--){
    console.log(i)
}

