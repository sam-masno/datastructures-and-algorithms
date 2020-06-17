//memoizing is the practice of caching results of a function by their param
//at execution check cache and return if present or carryout function
//this allows avoiding reprocessing of previously performed operation

//OOP memoization
var memo = (() => {
    var cache = {};
    function checkCache(arg) {
        if(arg in cache) {
            console.log(`${arg}: ${cache[arg]} returned from cache`)
            return cache[arg]
        } 
    }
    function addToCache(arg, value) {
        console.log(`${arg}: ${value} added to cache`)
        cache[arg] = value
    }
    function showCache () {
        console.log(cache)
    }
    function clearCache() {
        cache = {}
    }
    function cacheEntries() {
        console.log(Object.keys(cache).length)
    }
    function cacheTotal () {
        console.log(Object.keys(cache).reduce((sum, entry) => sum += cache[entry], 0))
    }

    return {
        checkCache,
        addToCache,
        showCache,
        clearCache,
        cacheTotal,
        cacheEntries
    }
})()

// var memo = memoize()
// var memo2 = memoize()


var times5 = num => {
    var inCache = memo.checkCache(num)
    if(inCache) return inCache;
    var product = num * 5;
    memo.addToCache(num, product);
    return product
}

