// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name)  
{cats.push(name);}

// 1) appends a cat to the end of the cats array
function destructivelyPrependCat(name)
{cats.unshift(name);}
//   2) prepends a cat to the beginning of the cats array

function destructivelyRemoveLastCat()
{cats.pop()}
//   3) removes the last cat from the cats array
function destructivelyRemoveFirstCat()
{cats.shift();}

//   4) removes the first cat from the cats array
function appendCat(name)
    {const catsCopy = [...cats, name];
        return catsCopy;}
//   5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name)
        {const catsCopy1 = [name, ...cats];
        return catsCopy1;}

//   6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat()
        {const catsCopy2 = cats.slice(0,-1)
        return catsCopy2}
//   7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat()
            {const catsCopy3 = cats.slice(1)
            return catsCopy3}
//   8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged