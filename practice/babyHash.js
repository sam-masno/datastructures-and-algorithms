class HashTable {
    constructor(size){
      this.data = new Array(size);
      this.keysList = []
    }
  
    //return lookup
    get(key) {
        // run key through hash and produce index
      const address = this._hash(key)
      if(!this.data[ address ] )return undefined
      return this.data[ address ].filter( item => item[0].toString() === key.toString() )
    }
    
    //add items to buckets
    set(key, data) {
        //run hash through key to get address
        const address =  this._hash(key);
        //push to keys tally
        this.keysList.push(key)
        //initialize bucket if no items exist yet
        if(!this.data[address]) this.data[ address ] = []
        // push item to bucket
        this.data[ address ].push([ key, data ])
    }

    // return an updated list of keys in data
    keys() {
        return this.keysList
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapes', 45)
  myHashTable.set('oranges', 100)
  myHashTable.set('banan', 2)

  console.log(myHashTable)
  console.log('keys ', myHashTable.keys())
  
  