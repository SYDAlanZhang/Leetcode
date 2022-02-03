/**
 * @param {number} n
 * @return {string}
 */
let generateTheString = function(n) {
    return n % 2 === 0 ? 'a'.repeat(n - 1) + 'b' : 'a'.repeat(n)
};