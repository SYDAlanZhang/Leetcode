/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var j = 0;
    var k = 0;
    for (var i = 0; i < A.length-1; i++) {
        if (i == k) {
            if (A[i] == A[i+1]) {
                k ++;
            } else if (A[i] < A[i+1]) {
                j = 1;
            }
        } else {
            if (((A[i] < A[i+1]) && j == 0) || ((A[i] > A[i+1]) && j == 1)) {
                return false;
            } 
        }
    }
    return true;
};