// Edge list is an implementation of a graph that just contains connections between node names
const graph = [ [0,1], [1,3], [2,1]]

//Adjacent list paires a node with a list of its connections
const adjList = [{'one': ['two', 'three']}, { 'zero': [ 'one', 'three']}, { 'two': ['one', 'three']}];

//uses a matrix to show relationship by value of index with a 0 or 1 (or any weighted value)
const adjMatrix = {
    'zero':[ { 'one': 10}, { 'two': 5 } ],
    'one':[ { 'two': 10}, { 'three': 5 } ],
    'two':[ { 'three': 10 } ]
}   
