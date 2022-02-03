var RecentCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    
    for (var i = 0; i < this.arr.length - 1; i++)  {
        if (this.arr[i] < t-3000) {
            this.arr.shift();
            i--;
        }
    }
    return this.arr.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */