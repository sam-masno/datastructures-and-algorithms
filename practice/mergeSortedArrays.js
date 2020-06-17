//this is an excercise in merging two sorted arrays

//takes two arrays as arguments
//arrays are sorted
//must combine into one array with both sorte
const arr1 = [-1, 2, 4,  6, 12, 100, 120, 140];
const arr2 = [-3, 8, 15, 44];

//O(a + b)
const merge = (arr1, arr2) => {
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;
    //make iterators for each array
    let index1 = 0;
    let index2 = 0;
    // get total length
    const totalLength = arr1.length + arr2.length;
    //create return array
    let newArray = []
    for (let i = 0; i < totalLength; i++) {
        //make checks to find greater, avoid adding undefined, and catch against inequal arrays
        if( arr1[index1] < arr2[index2] || !arr2[ index2 ]) {
            newArray[ i ] = arr1[index1];
            index1++;

        } else if(arr2[index2] < arr1[index1] || !arr1[ index1 ]) {
            newArray[ i ] = arr2[ index2 ];
            index2++;
        }
    }
    return newArray;
}

const merge2 = (arr1, arr2) => {
    
    return [...arr1, ...arr2].sort((a, b) => b - a )
}

console.log(merge(arr1, arr2));
console.log(merge2(arr1, arr2))