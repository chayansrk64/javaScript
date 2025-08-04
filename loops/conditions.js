//Section 11.1: Ternary operators =========

{
    let animal = "kitty";
    let result = (animal === 'kitty') ? "cute" : "still nice";
    // console.log(result)
}
{
    let animal = "kitty";
    let result;
    if(animal === "kitty"){
        result = "cute"
    } else {
        result = "still nice"
    }
    // console.log(result)
}
{
    let a = 0;
    let str = "not a";
    let b = '';
    
    // b = a === 0 ? console.log((a = 1, str += ' test')) : console.log((a = 2))

}
{
    // let a = 1;
    // a === 1 ? console.log(1) : 0;
}

// break and return are invalid in ternary operator;

{
    let animal = "kitty";
    for(let i= 0; i < 5; i++){
        if(animal === 'kitty'){
            break;
        } else{
            console.log(i)
        }
    }
}



// Section 11.2: Switch statement =======


{
    let value = 1;
    switch(value){
        case 1:
            // console.log('I will run')
        break;
        case 2:
            // console.log("I won't run")
        break;
        default:
            // console.log("if condition doesn't match i'll run")
    }
}

/**
 *      Warning: lack of a break or return statement for each case means the program will continue to evaluate
        the next case, even if the case criteria is unmet!
 * 
 */
{
    let value = 1;
    switch(value){
        case 1:
            // console.log('I will run')
       
        case 2:
            // console.log("I won't run")
       
        default:
            // console.log("if condition doesn't match i'll run")
    }
}

// The last case is the default case. This one will run if no other matches were made.

let value = 5;
switch(value){
    case 1:
        //  console.log('I will run')
       
    case 2:
        //  console.log("I won't run")
       
    default:
        //  console.log("if condition doesn't match i'll run")
}

{
    function john(){
        return 'John'
    }
    function jacob(){
        return "Jacob"
    }
    let name = "John"
    switch(name){
        case john():
            // console.log('I will run if name === "John"');
        break;
        case "Ja" + "ne":
            // console.log('I will run if name === "Jane"');
        break;
        case john() + ' ' + jacob() + ' Jingleheimer Schmidt':
            // console.log('His name is equal to name too!');
        break;
    }


}


//  Multiple Inclusive Criteria for Cases =====
{
    let x = "b";
    switch(x){
        case "a":
        case "b":
        case "c":
            // console.log('Either a, b or c was selected')
        break;
        case "d":
            // console.log("d was selected");
        break;
        default:
            // console.log('None of condition met');
        break; // precautinary break if case order changes
    }
}


// Section 11.3: If / Else If / Else Control ========

{
    let i = 1;
    if (i < 1){
        // console.log("i less than one")
    } else if(i > 1){
        // console.log("i greater than one")
    } else if(i = 1){
        // console.log("i equal to one")
    } else {
        // console.log("none of the previous condition is true")
    }
}

{
    let i = 1;
    if(i < 1){
        // console.log('i less than 10')
    } else {
        if(i > 2){
            // console.log(" i greater than 2")
        }else{
            if(i = 1){
                // console.log(" i is eaual to one")
            }
        }
    }
}

//  Section 11.4: Strategy =======
{
    const animalSays = {
        dog(){
            return 'woof';
        },
        cat(){
            return 'meow';
        },
        lion(){
            return 'roar';
        },
        default(){
            return 'moo';
        }
    }


    function makeAnimalSpeak (animal){
        const speak = animalSays[animal] || animalSays.default;
        return speak(); 
       
    }

    // console.log(makeAnimalSpeak('cat'))


}

{
    let age = 18;
    age = Number(age);
    
    if(isNaN(age)){
        // console.log('Please input a number!')
    } else {
        // console.log(age < 18 ? 'too young' : 'old enough')
    }
     
}


// nullish coalescing operator ====== ??
{
    let name;
    let str = "manik"
    let result = name ?? str; // if the first argument is null or undefined than return the second; otherwise return first;
    // console.log(result)
}


 
