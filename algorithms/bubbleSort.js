// bubble sort excercise
const arr = [2, 3, 1, 8, 5, 9, 12, 4, 6, 22, 11];

const bubbleSort = (arr) => {
    //checks

    //loop
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let swap = arr[j + 1]
                arr[j + 1 ] = arr[j]
                arr[j] = swap
            }
        }
    }
    //return 
    return arr
}

console.log(bubbleSort(arr))