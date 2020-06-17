# Hashtable
## What is a hashtable
Hashtable is data structure that consists of key/value pairs.

The table is a bucket of values that can be indexed by a named key, as opposed to an array that is indexed only by a number.

This allows more complex relationships and operations by allowing you to give keys to specific information.

## How it works
The hash table uses an idempotent hash function to generate an address for the key value. This fast process allows constant time look up for the table while providing key flexibility.

This hash function is executed every time a key is assigned or indexed. Although repetitive, the function is optimized and allows for a fast constant time complexity

Unlike arrays, the data will not be placed in adjacent addresses in memory and will lose the benefit of being ordered. 

## Hash Collisions
Due to the nature of hash tables and the finite amount of space it is inevitable that multiple entries will be assigned to the same memory space. This is known as hash collision

When this occurs the lookup time is slowed down to O(n/k), k being the size of the hash table.

It becomes necessary to deal with these by making some sort of list or chain that maintains the lookup functionality of the hash table.

## Operations vs. Time Complexity
Due the the hash methodology, these basic operations will all have a constant time complexity
1. Insert : O(1)
2. Lookup: O(1)
3. Delete: O(1)
4. Search: O(1)

## Pros
* Fast Lookup
* Fast Insert/Delete
* Flexible keys

## Cons
* Unordered
* Hash Collisions
* Slow Key Iteration

* JS extras
1. Map - allows any data-type to saved as key, maintains order of keys as they are entered
2. Sets - stores unique values of any data-type( value can only occur once )