# Linear Search
Iterate through a list and compare values to the search value
* Best case - O(1) - search value is first item in array
* Worst case - O(n) - search value is last in array or does not exist

Native js implementations 
'''
arr.indexOf('value') //returns index
arr.findIndex(element => element === 'value')//returns index of value
arr.find(element => element === 'value')//returns value
arr.includes('value') //returns boolean
'''

# Binary Search
If list is sorted, binary search can choose middle element, use comparator to find pertinent half of array, and repeat this splitting process until it has found the search value
eg
'''
arr = [1,2,3,4,5,6,7,8,9,10]
//searching for 2
//select midpoint
// compare 6 to 2
// value is in left subarray, disregard right subarray
[1,2,3,4,5,6]  -> discard [7,8,9,10]
//repeat
[1,2,3] discard -> [4.5.6]
[1,2,3] arr[Math.floor (arr.length/2)]  
get index 1 and return value

'''

# Breadth First Search O(n)
Traverses trees left to right at each level of the tree. This requires keep track of nodes on two levels at any given time.

* Pros
1. Shortest Path as it does not traverses depth once in one direction
2. Closer Nodes
3. If data is located in the higher levels of the tree, it will be found sooner

* Cons
1. Requires more memory to track parents and children


# Depth First Search O(n)
Begins at a parent node then traverses on side as deeply as it can, goes back up, then traverses the other side down. This stores less items in memory but requires more operations as it goes up and down the tree
* Pros 
1. Uses less memory
2. Can find deeply nested nodes more quickly

* Cons
1. Can be slower of deep graph/tree

## Implementations of DFS
1. Inorder - returns left child, parent, right child
2. Preorder - parent, left, child, right, child - returns in order that can easily recreate a tree
3. Postorder - left, right, parent

# Cases BFS vs DFS
* If you know a solution is not far from the root of the tree:
BFS

* If the tree is very deep and solutions are rare: 
BFS, the deeper the tree the slower the DFS

* If the tree is very wide:
DFS, BFS uses too much memory

* If solutions are frequent but located deep in the tree:
DFS

* Determining whether a path exists between two nodes:
DFS

* Finding the shortest path:
BFS

# Dijkstra and Bellman-Ford Algorithms
DFS and BFS do not take into account weighted edges on graphs. 

Bellman-Ford can accomodate for negative weights when finding the shortest path at O(n^2)

In a case with no negative weights, Dijkstra is the best option