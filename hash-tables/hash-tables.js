// Simple hash table implemented in javascript.

/*

{} <--- This is actually a hash table. A Javascript object.

*/

// Naive dictionary
function NaiveDict(){
    this.keys = []
    this.values = []
}

// Setting a new key in the hash table.
NaiveDict.prototype.set = function(key, value){
    this.keys.push(key)
    this.values.push(value)
}

// Finding a new key in the hash table.
NaiveDict.prototype.get = function(lookupKey){
    for (var i=0;i<this.keys.length;i++){
        var key = this.keys[i];
        if (key === lookupKey) {
            return this.values[i]
        }
    }
  }


//Better version of the hash table.
function HashTable(){
    this.bucketCount = 100000;
    this.buckets = [];
    for (var i=0; i< this.bucketCount;i++){
        this.buckets.push(new NaiveDict())
    }
}

// Hash function.
HashTable.prototype.hashFunction = function(key){
    var hash = 0;
    for (var i=0;i< key.length;i++){
        hash += key.charCodeAt(i)
    }
    return hash;
}

//Methods to get bucket.
HashTable.prototype.getBucketIndex = function(key){
    return this.hashFunction(key) % this.bucketCount
}
HashTable.prototype.getBucket = function(key){
    return this.buckets[this.getBucketIndex(key)]
}


// Methods to set a bucket.
HashTable.prototype.set = function(key, value){
   this.getBucket(key).set(key, value)
}
HashTable.prototype.get = function(lookupKey){
    return this.getBucket(lookupKey).get(lookupKey)
}


var dict = new HashTable();
dict.set("PI", 3.14)
console.log(dict.get("PI"))
