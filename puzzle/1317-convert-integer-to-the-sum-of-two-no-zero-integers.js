/**
 * @param {number} n
 * @return {number[]}
 */
let getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i ++) {
        let k = n - i
        if (!checkZero(i) && !checkZero(k)) {
            return [i, k]
        }
    }   
};

function checkZero(num) {
    return num.toString().includes('0') ? true : false
}

