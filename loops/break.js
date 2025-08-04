let i = 0;
for(; i <= 10 ;){
    i++
    if(i === 5){
        break;
    }
    // console.log(i)
}


{
    let i = 1;
    while(i <= 10){
        // console.log(i)
    i++
    if(i === 6){
        break;
    }
}
}

// JavaScript Labels

// break labelname;
{
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let text = "";
    list: {
        text+= cars[0] + "\n";
        text+= cars[1];
        break list;
    }
    console.log(text)
     
}
// continue labelname;


// Section 18.6: Break specific nested loops 
// outerloop: and innerloop: are called "label";
 
outerloop:
for(let i = 0; i < 3; i++){
    innerloop:
    for(let j = 0; j < 3; j++){
        // console.log("i", i);
        // console.log("j", j);
        if(j === 1){
            break outerloop;
        }
    }
}


// break and continue labels
{
    for(let i = 0; i < 5; i++){
        nextLoop2Iteration:
        for(let j = 0; j < 5; j++){
        if(i == j) break nextLoop2Iteration;
        console.log(i, j);
    }
    }
}