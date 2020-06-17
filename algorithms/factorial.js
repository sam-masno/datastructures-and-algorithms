// write two functions that find the factorial of a given number
const findFactorial = number => {
    if(!number) return 'no number';
    if(number === 2) return 2;
    if(number < 0) return 'enter positive number'

    let counter = number;
    let total = number;
    (function recursion() {
         //if counter 0 return total
        if(counter === 1) return
        //if not 0 dec, multiply, recur
        counter--;
        // console.log(total)
        total = total * counter;
        return recursion()
    })()
    return total
}

const findFactorialShorter = (number) => {
    if(number === 2) return 2;
    return number * findFactorialShorter(number - 1)
}
console.log(findFactorial(7))

console.log(findFactorialShorter(7))