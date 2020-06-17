//print every pair in an array
const arr = [1,2,3,4,5];
function printPairs(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            // console.log(`${arr[i]}${arr[j]}`)
            count ++
        }
    }
    console.log(count)
}

printPairs(arr)