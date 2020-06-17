// this is an excercise to find the first recurring characters given an array
const arr1 = [1,2,3,4,5,6]
const arr2 = [1,2,3,4,4,5]
const arr3 = [1,2,3,4,5,1]

const firstRecurringCharacter = (array) => {
    // basic checks
    if(!array || array.length < 2) return undefined;
    //create match indicator
    let match;
    //hash table to track previous chars
    const keys = {}
    //loop over array, add each to key and test against int
    array.forEach( character => {
        if( keys[ character ] && !match) {
            match = character;
        }
        keys[ character ] = true;
    })
    return match
}

console.log(firstRecurringCharacter(arr1))
console.log(firstRecurringCharacter(arr2))
console.log(firstRecurringCharacter(arr3))