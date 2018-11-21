/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) {
        return false;
    } else {
        let inc = 0;
        let dec = 0;
        for (let i = 0; i< A.length-1; i++) {
            if (dec == 0) {
                if (A[i] < A[i+1]) {
                    inc = 1;
                    continue;
                } else {
                    dec = 1;
                    if (i+2 == A.length) {
                        if (A[i+1] == A[i]) {
                            return false;
                        }
                    }
                }
            } else {
                if (A[i] > A[i+1]) {
                    continue;
                } else {
                    return false;
                }
            }
        }
        if (dec == 1 && inc == 1) {
            return true;
        } else {
            return false;
        }
    }
};