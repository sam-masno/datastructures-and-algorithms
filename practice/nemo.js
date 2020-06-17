const {performance} = require('perf_hooks');


const arr = ['nemo'];
const arr2 = new Array(100).fill('test').concat('nemo')

function findNemo(array){
    let t0 = performance.now()
    for(let i = 0; i < array.length; i++ ) {
        if(array[i] === 'nemo') console.log('found')
    }
    let t1 = performance.now();
    console.log('arr2', t1 - t0)
}

findNemo(arr2)