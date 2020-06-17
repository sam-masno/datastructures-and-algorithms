# What is big 0
Big O is a form of notation that measures the performance of code

## What is good code
1. Readable
2. Scaleable
* Scalability is the behavior of code as inputs increase expressed in two costs: speed(number of operations), memory of system

### The best code
1. Readable and maintainable at a high level
2. Maximizing speed as inputs are scaled up(efficient big O time complexity)
3. Minimize memory used as input are scaled up (efficient space complexity)

Big O is measure of the scaleability/efficiency of code.

## Run time
Amount of time code takes to run with a given input. This is a flawed metric for efficiency since it may depend on individual machine characteristics.

Big O notation measures the number of steps relative to number of inputs, giving a standardized measurement for code performance. Specifically it describes the worst case scenario, addressing either the time required or the space used

## O(n) Linear time
describes an operation that increases by 1 per marginal input. this creates a flat trajectory

## 0(1) Constant time
describes an operation that will always be the same
function boxes(array) {
    console.log(array[0])
}
the number of operations will stay the same no matter the change of inputs
0(1) is generally used to describe any constant operation, even if the exact number of operations is not 1.

## O(n^2) O(a * b) Quadratic time
Occurs with nested loops that will increase operations by an exponent of 2.
```
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
``` 
## O(2^n) Exponential time
Occurs when every input produces binary operations. This is a common feature of recurse algorithms that split operations in two at every recursion 
example: 
'''
const fibonacciRecursive = (n) => {
    if(n < 2) return n
    return fibonacciRecursive( n - 1 ) + fibonacciRecursive( n - 2 )
}
'''

## Rules of calculating O
1. Refers to worst case scenario 
* Breaks or probabilities will not be accounted for. Calculate as though every element of n is operated on
2. Drop constants
* single expressions will each add an op of 1, but since they will ultimately be the same every time, they are not counted.
* loops that add an operation in theory will add 1n every time, but since they still refer to a constant they can be reduced to 1.
* Big 0 refers to the trajectory/behavior of the line produced by scaling n up. if it is linear or constant, the factors do not matter
3. Different inputs
* if a function is taking multiple inputs and they are not being handled the same, they will form multiple n's that can be added
```
function twoInputs(arr1, arr2) {
    arr1.forEach(...)
    arr2.forEach(...)
}
```
this will produce O(a + b)
4. Drop non-dominants
* if a notation is O(n + n^2) it can be calculated to O(n^2). The most impactful factor can be used exclusively.
* Drop everything other than the most significant or equally significant factors

## What causes space complexity
1. Variables
2. Data structures
3. function calls
4. allocation
