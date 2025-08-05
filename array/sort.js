// JavaScript Array Sort
// The sort() method sorts an array alphabetically:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits.sort()); // sorted alphabetically;
}

// Reversing an Array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const reverse = fruits.reverse()
    // let reversed = []
    // for(let i = fruits.length-1; i >= 0; i--){
    //     reversed.push(fruits[i])
    // }
    // console.log(reverse)
    // console.log(reverse)
}
// sort() and reverse(); descending order
{
     const fruits = ["Banana", "Orange", "Apple", "Mango"];
     fruits.sort();
     fruits.reverse();
    //  console.log(fruits)
}

// toSorted() method; (does not change the orignal array)
{
    const months = ["Jan", "Feb", "Mar", "Apr"];
    const sorted = months.toSorted();
    // console.log(sorted)
    // console.log(months)
}
// toReversed() method; (does not change the orignal array)
{
    const months = ["Jan", "Feb", "Mar", "Apr"];
    const reversed = months.toReversed();
    // console.log(reversed)
    // console.log(months)
}
// Numeric Sort
{
    const points = [40, 100, 1, 5, 25, 10];
    // const sortNum = points.sort();
    points.sort(function(a, b){
        return a - b; // ascending order
    })
    // console.log(points)
}

// Sorting an Array in Random Order
{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(){
        return 0.5 - Math.random();
    })
    
    // console.log(points)
}
// get the minimun number form an array
{
   const points = [40, 100, 1, 5, 25, 10];
   function myArrayMin(arr){
        return Math.min.apply(null, arr)
   }
   console.log(myArrayMin(points)) 
}
// get the Maximum number form an array
{
   const points = [40, 100, 1, 5, 25, 10];
   function myArrayMax(arr){
        return Math.max.apply(null, arr)
   }
   console.log(myArrayMax(points)) 
}
