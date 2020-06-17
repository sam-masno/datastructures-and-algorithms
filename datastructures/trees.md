# Trees
## What are trees
Trees are a unilateral heirarchical data structure that uses a one-way parent-> child relationship.
All nodes are descended from one root node, each non-root node having exactly one parent.

Child nodes from a parent are referred to as leaf nodes.

* linked lists are a type of tree with only one child node. Similary model of linking is used to connect nodes.

## Binary tree
All nodes have exactly one parent and can have 0 to 2 children
1. Perfect Binary Tree - all nodes have 2 children and tree is symmetrical. This structure optimizes efficiency
* Every level of the binary tree doubles the last level
* The sum of the bottom level's nodes is equal to all the other levels combined + 1.

2. Full Binary Tree - All nodes have exactly 0 or 2 children. no node has 1 child 

## Methods vs time complexity
1. Lookup O(log N)
2. Delete O(log N)
3. Insert O(log N)

* there are no O(1) operations

## What is O(log N)
This is the time complexity calculated for a perfect binary tree
level 1: 2^1 - 1 = 1
level 2: 2^2 - 1 = 3
level 3: 2^3 - 1 = 7
level 4: 2^4 - 1 = 15

The total number of nodes is 2^steps - 1

log - number of times a number is multiplied to get another number

## Implementing a Binary Search Tree
1. From the root, every node to the right must be greater than the current node, on the left it must be less than
2. Any node can have no more than 2 children