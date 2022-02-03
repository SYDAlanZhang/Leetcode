/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
let decode = function(encoded, first) {
    let result = [first],
        current = first
    for (let i = 0; i < encoded.length; i ++) {
        current = encoded[i] ^ current
        result[i + 1] = current
    }
    return result
}

console.log(decode([1,2,3], 1))