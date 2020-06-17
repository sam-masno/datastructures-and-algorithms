# Sorting
## What is sorting
Sorting is the process of putting data in a specific order

The reason sorting is fundamental in data is that it gives entries meaning relative to eachother and makes access significantly faster.

## Comparision vs Non-comparision Sorting
Comparison sorting comparison operators(<,>, <=, etc) to get the find values relative to eachother.

Non-comparison sorting places entries into buckets based on integer place without comparison. Successive bucketing of integer places in a stable manner sorts the list. This method allows a time complexity below O(n(log(n))), performing in best cases at O(n)

## Don't rely on native sort methods
Sort methods are dependant on the engine. In the case of js items are sorted by the unicode value of.

## Bubble Sort O(n^2)
Iterates over array and pushes highest or lowest value to respective end of the array after each pass.

## Selection Sort


## Insertion Sort O(n^2)
Uses nested loops, with the inner loop checking checking from 0 up until the current postion of the outer loop(i-outer j-inner) If j loops up to position i in the array and finds a number lower, i is removed from that position and spliced in front of j.

This results in a time complexity of O(n^2) technically but in practice is slight less as it does not iterate the inner loop entirely each time.

This sorting algorithm is best used in small datasets or ones where data is near sorted

## Merge Sort O(n log(n))
Uses recursion to divide array in half until n arrays of one element exist, then then inserts elements back in order from left to right

Merge sort is stable - meaning that if two objects with equal keys appear in the unsorted array, they will be output in the same relative positions

With a time complexity of O(n log(n)) merge sort outperforms many sorting algorithms and one of the most commonly used in large data sets.

## Quick Sort Average O(n log(n)) Worst case O(n^2)
Quick sort starts by finding a pivot point which it then finds that elements in the array. After then pivot point is set, recursion is used to divide either side of the pivot into subarrays and then sorts them recursively



