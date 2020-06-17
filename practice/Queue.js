// this is an excercise to create a queue using a js class
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null
        this.next = null
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //enqueue - add a node to queue in last position
    enqueue(value) {
        //create node
        const newNode = new Node(value);

        //check if first node being added
        if(this.length === 0) {
            this.first = newNode;
            this.last = this.first;
            this.length++;
            return
        }

        //handle if not first node
        //assign newnode.next to last node
        this.last.prev = newNode;
        newNode.next = this.last;
        this.last = newNode
        //increment count
        this.length++
        return
    }

    //dequeue - remove a node from the first position
    dequeue() {
        //handle if no first
        if(!this.first) return null

        //handle if only node
        if(this.length === 1) {
            this.first = null;
            this.last = null
            this.length = 0
            return
        }
        //unlink first from second to last node
        this.first.prev.next = null;
        // reassign first node
        this.first = this.first.prev;
        this.length--;
        return
    }
    //peek - return the first and last items
    peek(print) {
        if(print) console.log('1st:', this.first.value, 'last:', this.last.value)
        return (this.first, this.last)
    }

    //print queue
    print() {
        let node = this.first;
        while(node) {
            console.log(node.value);
            node = node.prev
        }
        console.log(this.length)
    }
}

const queue = new Queue()

queue.enqueue('first')
queue.enqueue('second')
queue.enqueue('third')
// queue.dequeue()
queue.enqueue('fourth')
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

// queue.peek(true)

queue.print()