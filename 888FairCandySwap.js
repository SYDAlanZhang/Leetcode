/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let SumA = A.reduce((a, b) => a + b, 0),
        SumB = B.reduce((a, b) => a + b, 0);
    let diff = (SumA - SumB)/2
    
    let setA = new Set();
    for (let i=0; i<A.length; i++) {
        setA.add(A[i] - diff);
    }
    for (let j=0; j<B.length; j++) {
        if (setA.has(B[j])) {
            return [B[j]+diff,B[j]];
        }
    }
};