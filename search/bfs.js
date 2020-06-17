// this is an excercise to add Breadth First Search to a binary tree
const util = require('util');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor() {
        this.root = null
    }
    //insert item into binary tree
    insert(value){
        //if no root, set root as new node
        if(!this.root) {
            this.root = new Node(value);
            return
        }
        //use traverse to find parent node
        let parentNode = this.traverse(value);
        //handle duplicates
        if(parentNode.value === value) {
            console.log('No duplicate values permitted');
            return
        }
        // make new node and check for opening
        const leafNode = new Node(value)
        // if nothing in next direction, set new parentNode to that direction
        if(value > parentNode.value ) {
            parentNode.right = leafNode;
        } else {
            parentNode.left = leafNode;
        }
    }

    //remove item from binary tree
    remove(value) {
        //handle root removal
        if(value === this.root.value) {
            //check if right, change right.left to root.left
            // change root to right
            if(this.root.right) {
                this.root.right.left = this.root.left;
                this.root = this.root.right
                return
            }
            //if not right change root to left
            this.root = this.root.left;
            if(!this.root) console.log('Tree is empty')
            return            
        }
        //traverse for node
        let node = this.root;
        let noValue = false;
        while(node){
            //checks left and right to break at parent node
            if((node.right && node.right.value === value) || (node.left && node.left.value === value) ) {
                break
            }
            //check right, if empty return node, if not traverse right
            if(value > node.value) {
                if(!node.right) break;
                if(node.right.value > value) {
                    noValue = true;
                    break;
                };
                node = node.right
            }
            //check left, if empty return node, if not traverse left
            else {
                if(!node.left) break;
                if(node.left.value < value) {
                    noValue = true;
                    break;
                };
                node = node.left
            }
        }
        if(noValue) return console.log('Value does not exist')
        // remove link and shorten chain

        if(node.right && node.right.value === value) {
            console.log('remove right')
            const { left, right } = node.right; 
            node.right = right ? right : left;
        } else if(node.left && node.left.value === value){
            console.log('remove left')
            const { left, right } = node.left; 
            node.left = right ? right : left;
        } 
        return 
    }
    //traverse - take a value and loop thru nodes, checking direction
    //stop at node that is empty on the corresponding direction
    //use while loop
    traverse(value) {
        // start from root
        let node = this.root;
        while(node){
            // check if match and return node if so
            if(value === node.value) {
                break
            }
            //check right, if empty return node, if not traverse right
            if(value > node.value) {
                if(!node.right) {
                    break;
                } else {
                    node = node.right
                }
            }
            //check left, if empty return node, if not traverse left
            else {
                if(!node.left) {
                    break;
                }
                node = node.left
            }
        }
        return node;
    }

    //looks for and returns value from bst
    find(value, print){
        if(!this.root) {
            console.log('Tree is empty');
            return
        }
        let node = this.traverse(value);
        if(node.value === value) {
            console.log('Found value')
            if(print) console.log(node)
            return node
        }
        console.log('Value does not exist')
        return 
    }

    //implement breadth first search
    bfs(){
        // start with root
        let currentNode = this.root;
        //declare list and queues
        let list = [];
        let queue = [];
        //starts by adding root to queue
        //set current node to first in cue with queue.shift
        //add current node value to list
        //add left and right to queue
        //node gets added to queue when its parent is current node, node value is added to list when it is shifted from the queue
        queue.push(currentNode);
        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return list
    }

    // impliment breadth first search using recursion
    bfsR(queue = [this.root], list = []) {
        //return base case of no items in cue
        if(!queue.length) return list;
        //shift first node in cue
        let currentNode = queue.shift();
        //add current node value to list
        list.push(currentNode.value);
        // add left and right nodes to queue
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
        // recurse it passing queue and list back in  
        return this.bfsR(queue, list)
    }
    
    //implement depth first search in each order
    dfsInOrder(node = this.root, list = []) {
        if(node.left) this.dfsInOrder(node.left, list);
        list.push(node.value);
        if(node.right) this.dfsInOrder(node.right, list);
        return list
    }

    //implet preorder
    dfsPreOrder(node = this.root, list = []) {
        list.push(node.value);
        if(node.left) this.dfsPreOrder(node.left, list);
        if(node.right) this.dfsPreOrder(node.right, list);
        return list
    }

    // implement postorder
    dfsPostOrder(node = this.root, list = []) {
        if(node.left) this.dfsPostOrder(node.left, list);
        if(node.right) this.dfsPostOrder(node.right, list);
        list.push(node.value);
        return list
    }   

    print() {
        console.log(util.inspect(this, { showHidden: true, depth: null, colors: true }))
    }

}

const bst= new BinaryTree();
bst.insert(50)
bst.insert(55)
bst.insert(52)
bst.insert(51)
bst.insert(22)
bst.insert(30)
bst.insert(20)
console.log('inorder', bst.dfsInOrder())
console.log('preorder', bst.dfsPreOrder())
console.log('postorder', bst.dfsPostOrder())


// bfsR()
// bst.find(100, true)
// bst.remove(50)
bst.print()
