# Linked Lists
## What is a linked list
Linked lists are combined chains of nodes. These nodes are made of of two elements: a piece of data and a pointer to the location of the next node. 
pseudo code:
```
['name', @1848329] --> ['product', @38589003] --> ['quantity', @385920830] --> [ null ]
```
each node contains information and the location of the next element. The List is terminated when it hits null

Insert/delete requires traversing nodes until index is found, resulting in a time complexity of O(n)

The only lookup can done by traversing the list as their is no indexing, resulting in a linear time complexity.

Linked lists exist scattered in memory, making traversal slower than arrays that exist sequentially

* JS does not come with linked lists

## Methods vs Time Complexity
1. Prepend: O(1)
2. Append: O(1)
3. Lookup: O(n)
4. Insert/Delete: O(n)