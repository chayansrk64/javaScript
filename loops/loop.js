

const names = ['antara', 'bantara', 'labiba', 'arpita', 'ahona', 'tasnuva', 'sikdar'];
for(let i = 0; i < names.length; i++){
    // console.log(names[i])
}

{
    var array = ['a', 'b', 'c'];
    for (var i = 0; i < array.length; i++) {
    // console.log(array[i]);
}
}

let str = "Arpi gorpi";
for(let chr of str){
    // console.log(chr)
}




//  map =========

function toUpperCase(string){
    return string.toUpperCase();
}
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpperCase)
// console.log(upperCats)


// filter

function lCat(cat){
    return cat.startsWith('L');
}
// const lowerCats = cats.filter(lCat);
const lowerCats = cats.filter((cat) => cat.startsWith('L'));
// console.log(lowerCats)


{
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
    
    for(let cat of cats){
        // console.log(cat)
    }
     
}
{
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
    let myFavouriteCat = 'My cats are called  '
    for(let i = 0; i < cats.length; i++){
        myFavouriteCat += `${cats[i]} `
    }
    // console.log(myFavouriteCat)
}

{
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
    let myFavouriteCats = "My favourite cats are called";
    for(let i = 0; i < cats.length; i++){
        if(i === cats.length - 1){
            myFavouriteCats += ` and ${cats[i]}`
        }else{
            myFavouriteCats += ` ${cats[i]},`
        }
    }
    // console.log(myFavouriteCats)
}
