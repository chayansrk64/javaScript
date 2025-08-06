/***
 *  =========== FROM THE JAVASCRIPT NOTES FOR PROFESSIONALS =============
 *
 *  N:B: query with Section;
 *
 */

// Section 12.2: Reducing values

// Array Sum
{
  const arr = [1, 2, 3, 4];
  let sum = arr.reduce(function (a, b) {
    return a + b;
  });
  // console.log(sum)
  let sum2 = arr.reduce(function (a, b) {
    return a + b;
  }, 10);
  // console.log(sum2)
}

// Flatten Array of Objects
// array of objects;
{
  const array = [
    {
      key: "one",
      value: 1,
    },
    {
      key: "two",
      value: 2,
    },
    {
      key: "three",
      value: 3,
    },
  ];

  let result = array.reduce(function (obj, current) {
    obj[current.key] = current.value;
    return obj;
  }, {});

  // console.log(result)

  let result2 = array.reduce(
    (obj, current) =>
      Object.assign(obj, {
        [current.key]: current.value,
      }),
    {}
  );
  // console.log(result2)

  let result3 = array.reduce(
    (obj, current) => ({ ...obj, [current.key]: current.value }),
    {}
  );
  // console.log(result3)
}

// Find Min or Max Value

{
  const arr = [4, 2, 1, -10, 9];
  let result = arr.reduce((accumulator, currentValue) => {
    return accumulator < currentValue ? accumulator : currentValue;
  });
  // console.log(result)

  // let result2 = Math.min(...arr);
  // console.log(result2)
}

// Find Unique Values
{
  const arr = [1, 2, 1, 5, 9, 5];
  let result = arr.reduce((prev, number) => {
    if (prev.indexOf(number) === -1) {
      prev.push(number);
    }
    return prev;
  }, []);

  // console.log(result)
}

// Section 12.3: Mapping values
{
  let mapping = ["one", "two", "three", "four"].map(function (
    value,
    index,
    arr
  ) {
    return value.length;
  });
  // console.log(mapping)
}

{
  ["one", "two"].map(
    function (value, index, arr) {
      // console.log(this); // window (the default value in browsers)
      return value.length;
    },
    { documentation: "randomObject" }
  );
}

// Section 12.4: Filtering Object Arrays
// Suppose we want to get all odd number in an array:
{
  const numbers = [5, 32, 43, 4];
  let oddNums = numbers.filter(function (n) {
    return n % 2 === 1;
  });
  // numbers.filter(n => n % 2 === 1)
//   console.log(oddNums);
}
// it also works on an array of objects;
{
  var people = [
    {
      id: 1,
      name: "John",
      age: 28,
    },
    {
      id: 2,
      name: "Jane",
      age: 31,
    },
    {
      id: 3,
      name: "Peter",
      age: 55,
    },
  ];

  let result = people.filter(n => n.name.startsWith("J"));
//   console.log(result)

}

//  Section 12.7: Destructuring an array

{
    const triangle = [3,4,5];
    const [length, height, hypotenuse] = triangle;
    
    // element can be skipped
    const [, b, , c] = [1,2,3,4];

}
{
     //  Rest operator can be used too
    const [a, b, ...xs] = [1, 2, 3, 4, 5, 6, 7]
     
}

// Section 12.8: Removing duplicate elements\
{
    const uniqueArray = ['a', 1, 'a', 2, '1', 1].filter(function(value, index, self){
        return self.indexOf(value) === index;
    })
    // console.log(uniqueArray)
    const arr = ['a', 1, 'a', 2, '1', 1];
    // const uniqueArr = [... new Set(arr)]
    const uniqueArr = [... new Set(arr)]
    // console.log(uniqueArr)

}
// Section 12.10: Reversing arrays

{
    let arr = [1,2,3,4,5].reverse();
    // console.log(arr)
}
{
    const arr = [1, 2, 3, [1, 2, 3, ['a', 'b', 'c']]];
    function deepReverse(arr){
       arr.reverse().forEach(element => {
          if(Array.isArray(element)){
            deepReverse(element)
          }
       })
       return arr;
    }
    // console.log(deepReverse(arr))
}

// Section 12.11: Shallow cloning an array

{
    arrayToClone = [1,2,3,4,5];
    let clone1 = Array.from(arrayToClone);
    let clone2 = Array.of(...arrayToClone);
    let clone3 = [...arrayToClone]
    // console.log(clone1, clone2, clone3)
}

// Section 12.13: Merge two array as key value pair

{
    const columns = ['Date', 'Number', 'Size', 'Location', 'Age'];
    const rows = ['2001', '5', 'Big', 'Sydney', '25']
    const result = rows.reduce(function(result, field, index){
        // result[columns[index]] = field;
        result[columns[index]] = field
        return result
    }, {}) 
    // console.log(result)
}
// Filtering value;
{
    let str = 'Since Boolean is a native javascript function constructor that takes and the filter method also takes a function and passes it the current';
    let strArray = str.split(" ");
    let filterValue = strArray.filter(value => value.startsWith("a"))
    // console.log(filterValue)
}

// Section 12.17: Convert a String to an Array
{
    let str = "Bangladesh is woderfull";
    // console.log(str.split(","))
    // console.log([...str])
}
// min and max
{
    let myArray = [1, 2, 3, 4, 99, 20];
    let minValue = myArray[0];
    for(let i = 0; i<myArray.length; i++){
        // if(minValue > myArray[i]){
        //     minValue = myArray[i] 
        // }
        if(myArray[i] < minValue){
            minValue = myArray[i]
        }
    }
    // console.log(minValue)
}

// Section 12.22: Joining array elements in a string

{
    const arr = ["Hello", "World"]
    let arrToString = arr.join(" ");
    let stringToArr = arrToString.split(" ")
    // console.log(stringToArr)
}