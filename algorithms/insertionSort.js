//insertion sorting excercise
const arr = [2, 3, 1, 8, 0, 9, 12, 4, 6, 22, 11];

const insertionSort = (arr) => {
    for (let i=0; i < arr.length; i++){
        for(let j=0; j < i ; j++){
            if(i > 0)
            if(arr[j] > arr[i]){
                const swap = arr[i];
                arr.splice(i, 1);
                arr.splice(j, 0, swap)
            }
        }
    }
    return arr
}

console.log(insertionSort(arr))