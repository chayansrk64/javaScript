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