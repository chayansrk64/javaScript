const arr = [1,2,3,4,5,6,7,8,9,0];
// console.log(arr.length)
arr.length = 3;  // The length property can also be used to set the length of an array:
// console.log(arr.length)


// Array toString()
// the toString()  method returns the elements of an array as a comma seperated sting
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits.toString())
} 
// NOTE: ==== Every JavaScript object has a toString() method.=====

// JavaScript Array at()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits.at(2)); // get the element using index;
    // console.log(fruits[2])
}

// JavaScript Array join()
/**
 * the join method join all the elements as a sting
 * it behaves like toString() but in addition you can specify the separator;
 *
 */
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let joinArr = fruits.join(" * ");
    // console.log(joinArr)
} 
// pop and push method
{
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      let popedValue = fruits.pop();
    //   console.log(popedValue, fruits)     
}
// JavaScript Array push()
{
     const fruits = ["Banana", "Orange", "Apple", "Mango"];
     fruits.push("Strowberry")
    //  console.log(fruits)
}
// JavaScript Array shift()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let shiftedValue = fruits.shift();
    //  console.log(shiftedValue, fruits)
}
// JavaScript Array unshift()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");
    //  console.log(fruits)
}
// JavaScript Array length
{
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits[fruits.length] = "kiwi"; // to append an element;
    //   console.log(fruits)
}
// JavaScript Array delete()
{
     const fruits = ["Banana", "Orange", "Apple", "Mango"];
     delete fruits[0]; // returns an empty element and array lenght is same; use instead pop(), shift();
    //  console.log(fruits)
}

// Merging Arrays (Concatenating)
// JavaScript Array concat()
/**
 * concatination means joining string end-to-end
 * 
 */
{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    
    // console.log(myGirls.concat(myBoys))
}

// Example (Merging Three Arrays)
{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    // const newArr = arr1.concat(arr2, arr3)
    // console.log(newArr)
    
}
// The concat() method can also take strings as arguments:
{
    const arr = ["Cecilie", "Lone"]
    // console.log(arr.concat("Robin"))
}
// Array copyWithin() method copies array elements to another position in an array;
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.copyWithin(2, 0, 2) 
    // console.log(fruits)
}
// Flattening an Array
/**
 * Flattening an array is the process of reducing the dimensionality of an array
 * Flattening is usefull when you want to convet a multi-dimensional array into a one-dimensional array.
 * 
 */
// JavaScript Array flat()
{
    const myArr = [[1,2], [3, 4], [5,6]];
    const newArr = myArr.flat()
    // let newArr = [];
    // for(let i of myArr){
    //     for(let j of i){
    //         newArr.push(j)
    //     }
    // }
    // console.log(newArr)
}

// Splicing and Slicing Arrays
/**
 * The splice() method adds new items to an array; (add)
 * The slice() method slices out a piece of an array; (remove or divide)
 * splice() method change the original array;
 * slice() method doesn't change the original array;
 */
// JavaScript Array splice();
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // splice(start, deleteCount, item1, item2, ...)
    fruits.splice(2, 0, "strawberry", "blackberry");
    // console.log(fruits)
}
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1); // starts form 0 index and remove one item;
    // console.log(fruits)
}
// JavaScript Array toSpliced()
{
    const months = ["Jan", "Feb", "Mar", "Apr"];
    const toSpliced = months.toSpliced(0, 1)
    // console.log(months )
    // console.log(toSpliced)
}

// JavaScript Array slice()
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const afterSlice = fruits.slice(1, 2) // ["Orange"]
    // console.log(fruits)
    // console.log(afterSlice)
// when slice take two argument, first argument is start, and the second is up to :( but not included )
}  
{
     const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const afterSlice = fruits.slice(1, 4) // [ 'Orange', 'Lemon', 'Apple' ]
    console.log(afterSlice)
}