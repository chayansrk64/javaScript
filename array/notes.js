/***
 *  =========== FROM THE JAVASCRIPT NOTES FOR PROFESSIONALS =============
 * 
 *  N:B: query with Section;
 * 
 */

// Section 12.2: Reducing values

// Array Sum
{
    const arr = [1,2,3,4];
    let sum = arr.reduce(function(a, b){
        return a + b;
    })
    // console.log(sum)
    let sum2 = arr.reduce(function(a, b){
        return a + b;
    }, 10)
    console.log(sum2)
}

// Flatten Array of Objects

