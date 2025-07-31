const inputAge = document.getElementById('inputAge');
const submitBtn = document.getElementById('submitBtn');
const paragraph = document.getElementById('paragraph');


let age;
submitBtn.onclick = function(){
    age = Number(inputAge.value);
    
    if(age < 0 || age > 100 ){
        paragraph.textContent = 'please input 1 to 100!'
    }
    else if(age === 18){
         paragraph.textContent = 'you are an adult!'
    }
    else if(age >= 18){
         paragraph.textContent = 'you are mature!'
    }
    else if(age >= 50){
         paragraph.textContent = 'you are senior!'
    }
    else if(age >= 80 && age <= 100){
         paragraph.textContent = 'you are an old!'
    }
    else{
         paragraph.textContent = '';
    }

}








// ================ canvas ===================
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = 1900;
  canvas.height = 500;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);



//  calculator loop

const result = document.querySelector('#results');

function calculator(){
     for(let i = 1; i < 10; i++){
           const newResult = `${i} x ${i} = ${i * i}`;
          result.textContent += `${newResult}\n`;
     }
     result.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector('#calculate');
const clear = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculator)
clear.addEventListener('click', () => {
     result.textContent = '';
})


// break in loop

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const para = document.getElementById('para');
const input = document.getElementById('search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', ()=> {
     const searchName = input.value.toLowerCase();
     input.value = "";
     input.focus();
     para.textContent = "";
     for(const contact of contacts){
          const splitContact = contact.split(':');
          if(splitContact[0].toLowerCase() === searchName){
               para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`
               break;
          }
     }
     if(para.textContent === ''){
          para.textContent = "Contact not found!"
     }
})