/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(x => x ** 2).sort((a,b) => a-b);
    //A faster solution could be using two pointers.
    //This is practising es6 arrow function.
};