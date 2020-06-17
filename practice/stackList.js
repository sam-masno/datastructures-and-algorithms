// this excercise is intended to create a stack js class
const util = require('util');
/**
 * Main steps:
 * push to stack, adjust top
 * pop from stack, adjust top
 * provide a lookup with traversal to index
 */
class Node{
    constructor(value, prev = null){
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

//in stack, bottom will be the head, top will be the tail
class Stack {
    constructor() {
        this.bottom = null
        this.top = null;
        this.length = 0
    }
    //push
    push(value, prev = null) {
        if(this.length === 0) {
            this.bottom = new Node(value, prev)
            this.top = this.bottom
            this.length++;
            return
        }
        //create new node
        //assign previous
        const newNode = new Node(value, this.top);
        // adjust before pointer
        newNode.prev.next = newNode;

        // adjust top
        this.top = newNode;
        this.length++;
        return
    }

    pop() {
        // handle emptying of stack
        if(this.length === 0) {
            console.log('Cannot pop, no nodes exist')
            return 
        }
        if(this.bottom === this.top) {
            this.bottom = null;
            this.top = null;
            this.length = 0
            return
        }
        //change second to this.top.before to null

        this.top.prev.next = null
        // reassign this.top 
        this.top = this.top.prev
        this.length--;
        return
    }

    //traverse through stack and return index
    traverse(index, print = false) {
        //check if 0 index, return bottom
        if(index === 0) return this.bottom;
        //check if index greater than length
        if(index > this.length){
            console.log('out of range');
            return;
        }
        //loop node.next until at desired index
        let node = this.bottom;
        let i = 0;
        while( i !== index) {
            if(print) console.log(node.value)
            node = node.next;
            i++;
        }
        //return index
        return node;
    }

    //return node on top of stack
    peek(print) {
        if(print) console.log('top', this.top, 'bottom', this.bottom)
        return this.top
    }

    isEmpty(print) {
        const empty = !this.top && !this.bottom;
        if(print) console.log(print, this.length)
        return empty
    }

}

const stack = new Stack();
// stack.isEmpty(true)
// stack.pop()
stack.push('first')
// stack.isEmpty(true)
stack.push('second')
stack.push('third')
stack.pop()
stack.pop()
stack.pop()
// stack.push('fourth')
// stack.pop()
// stack.push('fifth')
// console.log(stack.traverse(stack.length , true))
console.log(stack.length)
stack.peek(true)
// console.log('top', stack.top)
// console.log('bottom', stack.bottom)
// console.log(util.inspect( stack.bottom, {showHidden: true, depth: null, colors: true}))
