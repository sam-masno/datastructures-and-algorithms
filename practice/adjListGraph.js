// this excercise is to create an adjacent list graph using a javascript class
const util = require('util');

class Graph {
    constructor() {
        this.nodeCount = 0;
        this.adjacentList = {}
    }

    addVertex(value) {
        this.adjacentList[value] = [];
        this.nodeCount ++
    }

    addEdge(first, second) {
        if(!first || !second) {
            console.log('Provide two verteces')
            return false
        }
        if(first === second) {
            console.log('Cannot connect node to self')
            return false
        } 

        if(!this.adjacentList[first]) {
            console.log(first, ' does not exist')
            return
        }
        if(!this.adjacentList[second]) {
            console.log(second, ' does not exist')
            return
        }
        
        this.adjacentList[first].push(second);
        this.adjacentList[second].push(first);
    }

    showConnections(vertex, print) {
        let connections = this.adjacentList[vertex].join(', ')
        if(print) console.log(vertex, connections)
        return connections
    }

    removeEdge(first, second){
        let list = this.adjacentList;
        list[first] = list[first].filter(vertex => vertex !== second)
        list[second] = list[second].filter(vertex => vertex !== first);
    }

}

const graph = new Graph();

graph.addVertex('first')
graph.addVertex('second')
graph.addVertex('third')
graph.addVertex('fourth')
graph.addEdge('first', 'second')
graph.addEdge('first', 'third')
graph.addEdge('fourth', 'first')
graph.removeEdge('first', 'fourth')
graph.showConnections('first', true)

console.log(util.inspect(graph, { showHidden: false, depth: null, colors: true}))