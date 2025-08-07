/**
 * ========== String Search Methods ===========
 * String indexOf()                     String matchAll()
 * String lastIndexOf()                 String includes()
 * Srting Search()                      String startsWith()
 * String Match()                       String endsWith()
 * 
 * 
 */

// JavaScript String indexOf()
/**
 * The indexOf() method returns the index (position) of the first occurrence
 * of a string in a string, or it returns -1 if the string is not found:
 */


// JavaScript String indexOf("string", starting position)
{
    let text = "Please locate where 'locate' occurs!";
    let indexOf = text.indexOf('locate');
    // console.log(indexOf)
}
// JavaScript String lastIndexOf("string", starting position);
{
    let text = "Please locate where 'locate' occurs!";
    let lastIndexOf = text.lastIndexOf('locate'); // starts form backwards
    // console.log(lastIndexOf)
}

// they both accept second parameter as the startig position for the search:


// JavaScript String search()
// returns the positon 
{
    let text = "Please locate where 'locate' occurs!";
    let searchStr = text.search("locate");
    let searchStr2 = text.search(/locate/);
    // console.log(searchStr, "th position", searchStr2)
}

// JavaScript String match()
/**
 * The match() method returns an array containing the results of matching
 * a string against a string ( or a regular expression ).
 */
{
    let text = "The rain in SPAIN stays mainly in the plain";
    let matchTxt = text.match('SPAIN');
    let regExp = text.match(/ain/gi); // /gi: global, case-insensitive;
    // console.log(regExp)

}

// JavaScript String matchAll()
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    const iterator = text.matchAll(/Cats/g);  // returns an iterator, not an array;
    for(let str of iterator){
        // console.log(str)
    }
    // console.log(iterator)
}

// JavaScript String includes("string", starting position)
// return true of false;
{
    let text = "Hello world, welcome to the universe.";
    let result = text.includes("world");
    // console.log(result)
}

// JavaScript String startsWith("string", starting position)
// return true of false
{
    let text = "Hello world, welcome to the universe.";
    let result = text.startsWith("hello");
    // console.log(result)
}

// JavaScript String endsWith("string", starting position)
// return ture or false;
{
    let text = "Hello world, welcome to the universe.";
    let result = text.endsWith("universe.");
    console.log(result)
}