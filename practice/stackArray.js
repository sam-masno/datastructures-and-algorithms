// this is an excercis to produce a stack based on a js array

class Node {
    constructor(value) {
        this.value = value;
    }
}

//With array it is not necessary to track top and bottom, just index them dynamically

class ArrayStack {
    constructor(){
        this.stack = [];
    }

    //push
    push(value) {
        this.stack.push( new Node(value))
    }
    //pop
    pop() {
        this.stack.pop()
    }
    //peek - return top and bottom nodes
    peek(print) {
        // return this.top
        console.log('bottom', this.stack[ 0 ], 'top', this.stack[ this.stack.length - 1])
    }

    //print
    print() {
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[ i ].value )
        }
    }
}

const stack = new ArrayStack();

stack.push('first')
stack.push('second')
stack.push('third')
stack.push('fourth')
stack.pop()
stack.pop()
stack.print()
stack.peek()
