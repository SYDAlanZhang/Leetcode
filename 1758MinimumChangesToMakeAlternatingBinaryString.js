/**
 * @param {string} s
 * @return {number}
 */
let minOperations = function(s) {
    let sum = 0,
      sLength = s.length
    for (let i = 0; i < sLength; i ++) {
      if (i % 2 == s[i]) { sum ++ }
    }
    return Math.min(sLength, sLength - sum, sum)
}