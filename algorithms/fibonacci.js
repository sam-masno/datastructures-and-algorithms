const fibonacciRecursive = (n) => {

    if(n < 2) return n
    return fibonacciRecursive( n - 1 ) + fibonacciRecursive( n - 2 )
}

const fibIterative = (n) => {
    let arr = [0,1]
    for ( let i = 2 ; i < n + 1; i++) {
        arr.push(arr[ i - 2 ] + arr[ i - 1])
    }
    console.log(arr)
    return arr[n]
}

console.log(fibIterative(7))

const fibIterative2 = (n) => {
    let first = 0;
    let second = 1;
    let third;
    for ( let i = 0; i < n; i++) {
        third = first + second;
        first = second;
        second = third
    }
    return (first)
}

console.log(fibIterative2(7))
console.log(fibonacciRecursive(10))