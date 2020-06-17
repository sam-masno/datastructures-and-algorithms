// this is an excercise to create a binary tree in a js class
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
    print() {
        console.log(util.inspect(this, {showHidden: true, depth: null, colors: true}))
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
// bst.find(100, true)
// bst.remove(50)



bst.print()
