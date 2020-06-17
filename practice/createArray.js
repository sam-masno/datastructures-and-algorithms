// this is an excercise to create a js class that mimics the functionality of an array
class MyArray {
    constructor(...args) {
        //set length and data based on args
        this.length = 0;
        this.data = {}

        // use a for loop to create a number based key system for data
        for(let i = 0; i < args.length; i++) {
            this.data[i] = args[i];
            this.length++
        }
    }

    //create lookup
    get(index) { return this.data[index] }

    // insert item at end of this.data
    push(item) { 
        this.data[ this.length ] = item;
        this.length++;
        return this.data; 
    }

    //delete item from end of list
    pop() {
        const last = this.data[ this.length -1 ];
        delete this.data[ this.length - 1 ];
        this.length--;
        console.log(last);
        return last
    }

    // remove item from data at given index
    delete( index ) {
        //for loop that moves every item after index forward by 1
        this.shift(index)
        return this.data
    }

    //create shift function as delete helper
    shift( index = 0 ) {
        for (let i = index; i < this.length; i++ ) {
            this.data[i] = this.data[ i + 1 ]
        }
        delete this.data[ this.length - 1 ];
        this.length--
    }
}

const arr = new MyArray('s','f','q','p','s')

arr.delete(2)
arr.shift()
console.log(arr.data, arr.length)