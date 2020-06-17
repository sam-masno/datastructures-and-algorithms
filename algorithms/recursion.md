# Recursion
## What is recursion
Recursion is the concept of a function that calls itself during its execution

This assists with tasks that need to be done repeatedly on a given input, such as traversing a file directory programmaticaly or tree type datastructure

## How to build a recursive function
Similar to a while or for loop, a recursive function needs some sort of condition that will break process. If not, execution contexts will continually be piled onto the stack until the max limit is reached, dumping the stack

1. Create function that references itself
2. Create a base case that will terminate the function
3. Identify recursion case.
4. Call function again if base case failed.

```
    let x = 0
    function recur() {
        if(x > 5){
            return 'recursion over'
        }
        x++
        //*** SEE NOTE
        return recur()
    }
```
4. NOTE: recursive functions are called from inside their previous recursion function. Therefore, if returning a value from the recursion, the function must contain a return value when recalled.  As final iteration completes in the case above, it is popped and returns its value to the parent, but if the parent did not have a return value, it would revert back to undefined.

* when traversing back to the global context after completion, value must be returned 

## Time Complexity
Due to expanding nature, recursive calls have  a time complexity of O(2^n), making a potential optimization hazard

Due to their expense, recursive operations should be used in the following situations:
1. Problem can be divided into sub problems that are smaller instances of the same problem
2. Each instance of the sub problem is identical in nature
3. The solutions of the subproblems can be combined to solve the problem at hand

In addition, recursion may not be an optimal solution as they are difficult for many programmers to utilize in the case of shared tasks

In most cases, iterating can easily accomplish the same task at a better time complexity

