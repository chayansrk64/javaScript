 
// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

let num = 1;
while(num <=60){
    // console.log("I will invest at least 6 hrs every single day for next 60 days!", num)
    num++
}

// odd numbers between 61 to 100;

{
    let num = 61;
    while(num <= 100){
        if(num % 2 === 1){
            // console.log(num)
        }
        num++;
    }
}

// find all the even number from 78 to 98
{
    let num = 78;
    while(num <=98){
        if(num % 2 === 0){
            // console.log(num)
        }
        num++;
    }
}

// Display sum of all the odd numbers from 81 to 131.

{
    let num = 81;
    let oddSum = 0;
    while(num <= 131){
        if(num % 2 === 1){
            oddSum += num;
        }
        num++;
    }
    // console.log(oddSum)
}
// Display sum of all the even numbers from 206 to 311.
{
    let num = 206;
    let evenSum = 0;
    while(num <= 311){
        if(num % 2 === 0){
            evenSum += num;
        }
        num++;
    }
    // console.log(evenSum)
}

// multiplication table for 5;

{
    let num = 1;
    let multiplyBy = 5;
    while(num <= 10){
        let result = num * multiplyBy; // number
        // console.log(num, "x", multiplyBy, "=", result);
        num++;
    }
    
}

// reverse loop (countDown)

{
    let countDownStart = 21;
    while(countDownStart >= 15){
        // console.log(countDownStart);
        countDownStart--;
    }
}