// this is an excercise to re-create the functionality of a doubly-linked list using a js class
const util = require('util')

class LinkedList{
    //list will be constructed of nested hash tables
    //this mimics the linked list nature of containing a pointer to the next value in the list
    constructor(value) {
        this.head = {
            value,
            before: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //insert a new value after the given value
    //takes value you want to insert afterand new value
    insert(insertAt, value){
        // traverse for insertion node
        const node = this.traverse(insertAt)
        // if not found return warning
        if(!node)  return 'Insertion point not found'
        //assign pointer of insertionnodes next value
        //create node to insert with new value, and insertion node's previous next value
        const nodeToInsert = {
            value,
            before: node,
            next: node.next
        }
        // reassign insertion node's next value to the new node
        node.next = nodeToInsert

        //increment length
        this.length ++

        if(nodeToInsert.next === null) this.tail = nodeToInsert
    }

    //remove a node by value from the list
    remove(value) {
        let node = this.traverse(value)
    

        if(!node) {
            return 'node does not exist'
        }

        //case if only element
        if(!node.before && !node.next){
            return 'cannot delete last element'
        }

        //case if first element
        if(!node.before && node.next) {
            node.next.before = null;
            this.head = node.next;
        }

        //case if removal is last item
        else if (node.before && !node.next) {
            node.before.next = null;
            this.tail = node.before;

        //case if in middle of list
        } else if (node.before && node.next) {
            node.before.next = node.next;
            node.next.before = node.before;
        }
        
        this.length--;
    }

    //reomove a node by index
    removeIndex(index) {
        if(!this.head.next) {
            return 'cannot delete last element'
        }
        if(index === 0) {
            let newHead = {
                value: this.head.next.value,
                before: null,
            };
            if(this.head.next.next) {
                newHead.next = this.head.next.next;
                newHead.next.before = newHead;
                this.head = newHead;
            } else {
                newHead.next = null;
                this.head = newHead;
                this.tail = newHead;
            }
            this.length--;
            return;
        }
        //iterate to node before index
        let node = this.traverseOneNodeShort(index);
        //chande change next to next.next to skip
        if(this.tail !== node.next) {
            console.log(node.next)
            node.next = node.next.next;
            node.next.before = node;
        } else {
            node.next = null;
        }
        
        this.length--;
    }

    //function used to increment through linked list by indexing values
    //primarily created for inserting new node
    traverse(value) {
        if(value === 0) return { node: this.head, previousNode: null }; 
        //start at data head
        let previousNode;
        let node = this.head;
        let fail = false
        // use while loop to do the following:
        //check if you hit the end of the list(hit fail switch)
        //check if current node value is the one traversing for, if not, while loop will increment to next node
        while(node.value !== value) {
            if(node.next == null) {
                fail = true;
                break;
            }
            else {
                previousNode = node
                node = node.next;
            }
        }

        //if failed return nothing, else return node
        return fail ? null : node;
    }

    //insert a value to the beninging of the list
    prepend(value) {
        //replace head with new value and next with previous head
        let oldHead = {
            value: this.head.value,
            next: this.head.next
        }

        let newHead = {
            value,
            before: null,
            next: oldHead
        }

        oldHead.before = newHead

        
        this.head = newHead

        //increment length
        this.length ++
    }

    //add a value to end of the list
    append(value) {
        //assign new value as current tail.next
        this.tail.next = {
            value,
            before: this.tail,
            next: null
        }
        // reassign tail to new value 
        this.tail = this.tail.next
        this.length++
    }  
    
    //return the value of a node at a give index
    lookup(index) {
        // ensure index is within range
        if(index > this.length -1) return 'out of range';
        if(index === 0 ) return this.head;
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node.value
    }

    insertAtIndex(index, value) {
        if(index > this.length) {
            console.log('out of range')
            return 
        }
        
        if(index === 0) {
            this.prepend(value)
            return
        }
        let node = this.traverseOneNodeShort(index)

        let newNode = {
            value, 
            before: node,
        }

        if(node.next !== null) {
            newNode.next = node.next.next;
            newNode.next.before = newNode;
        } else {
            newNode.next = null;
            this.tail = newNode;
        }

        node.next = newNode;
        this.length++
        return this
    }

    //traverse to last node before index for insertions and deletions
    traverseOneNodeShort(index) {
        let node = this.head;
        if(index === 0 ) return node;
        for (let i = 0; i < index - 1 ; i++) {
            node = node.next;
        }
        return node;
    }

    //print all values
    printValues() {
        let node = this.head;
        console.log('print')
        while (node !== null) {
            console.log(node.value)
            node = node.next
        }
    }

    printReverse() {
        let node = this.tail;
        console.log('reverse')
        while(node !== null) {
            console.log(node.value);
            node = node.before
        }
    }
}

const linkedList = new LinkedList(100);

linkedList.insert(100, 20)
linkedList.insert(100, 12)
linkedList.insertAtIndex(1, 2)
linkedList.removeIndex(3)
linkedList.insertAtIndex(0, 88)
linkedList.removeIndex(0)
linkedList.printValues();
linkedList.printReverse();
console.log(linkedList.head)
console.log(linkedList.tail)




linkedList.append(10)
linkedList.remove(10)
linkedList.append(99999)
linkedList.append(20)


// console.log(util.inspect(linkedList.head, {showHidden: true, depth: null, colors: true}))

