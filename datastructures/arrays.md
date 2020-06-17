# Array/Lists
## What is an array
* An array is a data structure that contains values sequentially, occupying memory addresses one after another
* Elements contained in an array will be in order by index in the machine memory(RAM)

## Methods vs Time Complexity
1. Insert and delete from at end - can immediately insert/delete after last address in array
* Push: O(1) - works on a lookup with constant time
* Pop: O(1) - lookup at constant time

2. Insert and delete not at end - will need to iterate portions at after insert/delete point
* Unshift: O(n) - needs to move every item in array, making equal to input length
* Splice: O(n) - same as unshift 

3. Lookups - can immediately go to address of element
* indexing array[i]: O(1) - indexing goes directly to address of element


* Not all languages utilize static arrays. Lower level languages tend to utilize static arrays for performance and control issues
## Static arrays
Static arrays require their length/size to be explicitly stated when they are created. This cannot be modified after instantiation 

The purpose of this is to allocate adjacent space in memory in order to keep data together in order.

This can have a performance benefit by keeping data together in one place at all times.

## Dynamic arrays
Dynamic arrays do not need to be explicitly sized at instantiation. They can be resized and this allows flexibility in their use.

In order to maintain elements in adjacent space in memory, the dynamic array will be copied and replaced in its entirety

Dynamic arrays will require more reading and writing as a performance consideration
## Pros
1. Ordered
2. Fast Lookup
3. Fast pop and push

## Cons 
1. Slow insert and delete
2. Fixed size if static, repeated read/write if dynamic