// excercise to implement memoization to a recursive fibonacci functon


const fibonacciRecursive = (n) => {
    if(n < 2) {
        return n
    }
    return fibonacciRecursive( n - 1 ) + fibonacciRecursive( n - 2 )
}

let calc1 = 0;

const fibMemo = () => {
    const cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if(n < 2) {
                return n;
            };
            calc1++;
            cache[n] = fib(n -1 ) + fib (n - 2); 
            return cache[n]
        }
    }
}

const fib = fibMemo()

// console.log(fibonacciRecursive(20))
console.log(fib(20))
console.log(calc1)