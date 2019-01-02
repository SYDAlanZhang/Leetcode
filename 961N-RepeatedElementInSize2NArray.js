/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let repeatSet = new Set();
    for (let i = 0; i < A.length; i++) {
        if (!repeatSet.has(A[i])){
            repeatSet.add(A[i]);
        } else{
            return A[i];
        }
    }
};