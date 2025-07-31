//  for of loop;

const cars = ['BMW', 'audi', 'volvo', 'mini', 'range-rover'];

// for(const car of cars){
//     console.log(car)
// }

// with index;
// for(const [index, car] of cars.entries()){
//     console.log(index, car)
// }

// Looping over an Array
 {
    const cars = ["BMW", "Volvo", "Mini"];
    for(let car of cars){
        // console.log(car)
    }
 }

// Looping over a string
{
    const str = "JavaScript";
    for(let char of str){
        // console.log(char)
    }
}


// ============ Set object; ============
// for-of works on Set Object;

// A Set object eliminate duplicates.

{
    const names = ['antara', 'labiba', 'antara', 'arpita','tasnuva', 'labiba']

    const uniqueNames = new Set(names);
    // console.log(uniqueNames)
    for(let name of uniqueNames){
        // console.log(name)
    }


    let uniqueNameArr = [];
    for(let i = 0; i<names.length; i++){
        if(uniqueNameArr.includes(names[i])){
            continue;
        } else {
            uniqueNameArr.push(names[i])
        }
    }
    // console.log(uniqueNameArr)
     
}

{
    const mySet = new Set()
    mySet.add("manik")
    mySet.add(3)
    mySet.add(true)
    // console.log(mySet.has('manik')) // check existance
    // console.log(mySet.delete(3)) // remove element
    // console.log(mySet.size) // get size;

    const arr = [...mySet]; // convert Set to an array;
    // console.log(arr)
    // console.log(mySet)


    const myArr = ['a', 'b', 'c', 'c', 'a']; // create an array;
    const removeDuplicate = new Set(myArr); // remove duplicates (object)
    for(let element of removeDuplicate){
        // console.log(element)
    }
    const backToArr = [...removeDuplicate]; // return to array;
    // console.log(backToArr)


}


// ============== Maps =================


{
    const map  = new Map()
    .set('abc', 1)
    .set('def', 2)
    // console.log(map)
    for(let [key, value] of map){
    //    console.log(key + " is mapped to ", + value)
    }
}

// ================= Object ================
// for of loop do not work directly on opain Objects; but, it is possible to iterate over an object's properties by switching to a for..in loop, or using Object.keys();

{
    const myObject = {
        name: 'Mike',
        age: 32
    }

    for(let key of Object.keys(myObject)){
        console.log(key + ": " + myObject[key])
    }
    for(let key in myObject){
        console.log(myObject[key])
    }
}








