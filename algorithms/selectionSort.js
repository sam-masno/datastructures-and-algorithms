//selection sort excercise
const arr = [2, 3, 1, 8, 5, 9, 12, 4, 6, 22, 11];

const selectionSort = (arr) => {
    //create outer loop with i
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let swapIndex;

        //create inner loop starting from i
        //keep track of smallest number and at the end insert to arr[i] by swapping
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                swapIndex = j;
            }
        }
        if(swapIndex){
            let swap = arr[i];
            arr[i] = arr[swapIndex];
            arr[swapIndex] = swap;
        }
    }
    return arr
}

console.log(selectionSort(arr))