/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var B = new Array();
    var even = 0;
    var odd = 1;
    for (var i=0; i<A.length; i++) {
        if (A[i]%2 == 0) {
            B[even] = A[i];
            even += 2;
        } else {
            B[odd] = A[i];
            odd += 2;
        }
    }
    return B;
};