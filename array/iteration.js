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
    console.log(result)
}