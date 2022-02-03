/**
 * @param {number[]} A
 * @return {boolean}
 */
 //It's not an optimum way to use splice and shift function for lists
 //A better way could be using hashmaps and minus count by 1 at each remove operation
var canReorderDoubled = function(A) {
    A = A.sort((a, b) => a - b);
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            let doubleI = A.indexOf(A[i]/2);
            if (doubleI != -1) {
                A.splice(doubleI,1);
                A.shift();
                i--;
            } else {
                return false;    
            }
        } else {
            let doubleI2 = A.indexOf(A[i]*2);
            if (doubleI2 != -1) {
                A.splice(doubleI2,1);
                A.shift();
                i--;
            } else {
                return false;    
            }
        }
    }
    return true;
};