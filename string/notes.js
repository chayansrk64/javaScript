// Chapter 7: Strings
// Section 7.1: Basic Info and String Concatenation

/**
 * String can be created form other types using the String() function.
 * or toString() can be used to convet Numbers, booleans or Objects to Strings.
 */
{
    let intString = String(512); // "512"
    let booleanString = String(true); // "true"
    let nullString = String(null); // "null"
}
{
    let intSring = (512).toString(); // "512"
    let booleanString = (true).toString() // "true"
    let objString = ({}).toString(); //"[object Object]"
    // console.log(intSring, booleanString, objString)
}

// Section 7.2: Reverse String
function reverseString(string){
    return string.split('').reverse().join('')
}
// console.log(reverseString("Bangladesh"))
function reverseStr(str){
    return [...String(str)].reverse().join('')
}
function reverse(str){
    let strRev = '';
    for(let i = str.length-1; i >= 0; i--){
        strRev += str[i]
    }
    return strRev;
}
// console.log(reverse('zebra'))

// To compare strings alphabetically, use localeCompare()

{
    let arr = ["bananas", "cranberries", "apples"];
    let result = arr.sort(function(a, b){
        return a.localeCompare(b)
    })
    // console.log(result)
}

// Section 7.6: Word Counter

{
    let paragraph = "we are trying to find how many characters are in this sentence\n.and how many words\n aslo how many lines as well."
    
    function wordCount(paragraph){
        let splitWord = paragraph.match(/\S+/g);
        // let split = paragraph.split(' ')
        return {
            charactersNoSpace :paragraph.replace(/\s+/g, '').length,
            // characterWithoutSpace: paragraph.replaceAll(' ', '').length
            words: splitWord ? splitWord.length : 0,
            // words: paragraph.split(" ").length
            lines: paragraph.split(/\r*\n/).length,
            // lines: paragraph.split('\n').length,
        }
         
    }
    console.log(wordCount(paragraph))

}
