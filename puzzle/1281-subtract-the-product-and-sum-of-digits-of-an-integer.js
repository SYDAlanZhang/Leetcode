/**
 * @param {number} n
 * @return {number}
 */
let subtractProductAndSum = function(n) {
    let sumAdd = 0,
        sumProduct = 1
    while (n) {
        let currentDigit = n % 10
        sumAdd += currentDigit
        sumProduct *= currentDigit
        n = ~~(n / 10)
    }
    return sumProduct - sumAdd
};

console.log(subtractProductAndSum(234))