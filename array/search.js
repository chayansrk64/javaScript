//JavaScript Array indexOf()
{
    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    let position = fruits.indexOf("Apple", 2);
    // console.log(position)
}
// if the item is present more than once, it returns the position of the first occurrence;
// JavaScript Array lastIndexOf()
{
     const fruits = ["Apple", "Orange", "Apple", "Mango", "Orange"];
     const lastIndexOf = fruits.lastIndexOf("Apple")
    //  console.log(lastIndexOf)
}
// JavaScript Array includes()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const includes = fruits.includes("Apple")
    // console.log(includes)
}

// JavaScript Array find();
{
    const numbers = [4, 9, 16, 25, 29];
    let find = numbers.find(findOne);
    function findOne(value, index, array){
        return value > 15;
    }
    // console.log(find)
}
// JavaScript Array findIndex()
{
   const numbers = [4, 9, 16, 25, 29];
   const findIndex = numbers.findIndex(myFunction)
   function myFunction(value, index, array){
        return value > 18;
   }
//    console.log(findIndex)
}
// JavaScript Array findLast() Method
{
    const temp = [27, 50, 30, 40, 42, 35, 30];
    let fl = temp.findLast(x => x > 40);
    // console.log(fl)
}
// JavaScript Array findLastIndex() Method
{
     const temp = [27, 50, 30, 40, 42, 35, 30];
    let fli = temp.findLastIndex(x => x > 40);
    // console.log(fli)
}