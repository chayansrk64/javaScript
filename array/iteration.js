// JavaScript Array forEach()
// does not return value;
{
    const numbers = [45, 4, 9, 16, 25];
    numbers.forEach(function(x){
        //  console.log(x * 2)
    })
}

// JavaScript Array map()
// return value;
{
    const numbers = [45, 4, 9, 16, 25];
    let doubled = numbers.map(function(x){
        return x * 2;
    })
    // console.log(doubled)

}
// JavaScript Array filter()
{
     const numbers = [45, 4, 9, 16, 25];
     const result = numbers.filter(filtering)
     function filtering(value, index, array){
        return value > 9;
     }
    //  console.log(result)
}
// JavaScript Array reduce()
{
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(reducer);
    function reducer(total, value, index, array){
        return total + value;
    }
    // console.log(sum)
}
// JavaScript Array every()
// The every() method checks if all array values pass a test;
{
    const numbers = [45, 4, 9, 16, 25];
    let result = numbers.every(checker);
    function checker(value, index, array){
        return value % 2 === 0; // checks every element is even number;
    }
    // console.log(result) // false;

}
// JavaScript Array some()
// The some() method checks if some array vlaues pass a test.
{
    const numbers = [45, 4, 9, 16, 25];
    let result = numbers.some(checker);
    function checker(value, index, array){
        return value % 2 === 0; // checks some element is even number;
    }
    // console.log(result) // true;
}

// JavaScript Array.from() ======
/**
 * The Array.from() method returns an Array object from:
 * 1. Any iterable object;
 * 2. Any object with a length property;
 */
{
    let text = 'abcdefg';
    let result = Array.from(text);
    // console.log(result)
}
{
    const arr1 = ['a', 'b']
    const arr2 = ['c', 'd']
    const arr3 = ['e', 'f']
    let concated = arr1.concat(arr2, arr3);
    // console.log(concated) // concatinated into one array
    let text = '';
    for(let i of concated){
        text += i;
    }
    // console.log(text) // created a string with all the element;
    let makeArr = Array.from(text);
    // console.log(makeArr) // agian make it an array;
}
// JavaScript Array keys()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();
    for(let x of keys){
        // console.log(x) // getting the index;
    }
    // console.log(keys) // Object [Array Iterator] {}
}

// JavaScript Array entries()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();
    for(let x of f){
        // console.log(x)
    }
    // console.log(f)
}

// JavaScript Array with() Method
{
    const months = ["Januar", "Februar", "Mar", "April"];
    const myMonths = months.with(2, "March"); // without altering the original array
    // console.log(myMonths)
}
// JavaScript Array Spread (...)
{
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6]; 
    const arr3 = [...arr1, ...arr2];
    // console.log(arr3)
    // copy 
    const arr4 = [...arr3];
    // console.log(arr4)
}
// min and max using spread(...)
{
    const numbers = [23,44,56,76,98];
    let minValue = Math.min(...numbers);
    // console.log(minValue)
    let maxValue = Math.max(...numbers);
    // console.log(maxValue)
}

// JavaScript Array Rest (...)
{
    let a, rest;
    const arr1 = [1,2,3,4,5,6,7,8];
    [a, ...rest] = arr1;
    // console.log(rest) 
}
{
    let a, b, rest;
    const arr1 = [1,2,3,4,5,6,7,8];
    [a, b, ...rest] = arr1;
    // console.log(rest) 
}
