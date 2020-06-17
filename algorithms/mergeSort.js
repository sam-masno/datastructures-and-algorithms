//merge sort excercise
const arr = [2, 3, 1, 8, 0, 9, 12, 4, 6, 22, 11];

const mergeSort = arr => {
    // base case of length 1
    if(arr.length <= 1) return arr;

    //find split point
    const middle = Math.floor(arr.length / 2);
    // make left and right
    const left = arr.slice(0, middle);
    const right = arr.slice(middle)
    //recurse
    return merge(mergeSort(left), mergeSort(right))

    //make merge function
    function merge(left, right) {
        //result and tracking index
        const result = []
        let indexLeft = 0;
        let indexRight = 0;
        // while loop runs until index reach the length of their array
        while(indexLeft < left.length && indexRight < right.length) {
            if(left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft]);
                if(indexLeft < left.length) indexLeft++;
            } else {
                result.push(right[indexRight])
                if(indexRight < right.length) indexRight++
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }
}

console.log(mergeSort(arr))