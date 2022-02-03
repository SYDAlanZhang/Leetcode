/**
 * @param {number} n
 * @return {number[]}
 */
let sumZero = function(n) {
    let result = []
    if (n % 2 === 1) { result.push(0) }
    for (let i = 1; i <= n / 2; i++) {
        result.push(i, -i)
    }
    return result
};

console.log(sumZero(7))