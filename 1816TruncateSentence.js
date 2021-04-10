/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let truncateSentence = (s, k) => {
    return s.split(' ').splice(0, k).join(' ')
}
