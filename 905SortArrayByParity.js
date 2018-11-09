/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var j = 0;
    for (var i = 0; i < A.length; i++) {
        if (A[j] % 2 == 1) {
            A.push(A.splice(j,1)[0]);
        } else {
            j ++;
        }
    }
    return A;
};