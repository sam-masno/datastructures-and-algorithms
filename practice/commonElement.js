const arr1 = [1, '3','c', 'x'];
const arr2 = [1, '9'];
const arr3 = ['2', '1' ,'7']

function findCommonElement(arr1, arr2) {
    //if either arr is empty return false
    if(!arr1 || !arr2) return false
    if(arr1.length < 1 || arr2.length < 1 ) return false

    
    //id long and short arr
    let longArr;
    let shortArr;
    if(arr1.length > arr2.length) {
        longArr = arr1
        shortArr = arr2;
    } else {
        longArr = arr2
        shortArr = arr1
    }

    //make placeholders
    let match = false
    const key = {};

    //loop the length of the long arr
    for ( let i = 0; i < longArr.length; i++) {
        //if shortarr[i] defined add key value
        if( shortArr[ i ] && !key[ shortArr[i] ] ) {
            key[shortArr[ i ] ] = true
        }

        //for each item in longarr, check if key exists
        if (key[ longArr[ i ] ]) {
            match = true;
            break
        }
    }
    return match;
}

console.log(findCommonElement(arr1, arr2))