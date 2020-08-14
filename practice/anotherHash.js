var MyHashSet = function() {
    this.table = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    var hash = this.hash(key);
    this.table[hash] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    var hash = this.hash(key);
    delete this.table[hash];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    var hash = this.hash(key);
    if(this.table[hash] === key) return true;
    else return false;
};

MyHashSet.prototype.hash = function(key) {
  var hashLength = 15;
  var hash = '';
  var index = 1;
  while (hash.length < hashLength) {
    var i = index**2 * key ** 2 % 256;
    var char = String.fromCharCode(i);
    var next = ((key<<2)-key) + char;
    hash += next;
  }
  return hash;
}

var hashSet = new MyHashSet();