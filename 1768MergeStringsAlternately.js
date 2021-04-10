/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
let mergeAlternately = (word1, word2) => {
  let result = ''
  for (let i = 0; i < word1.length + 1; i ++) {
    if (word1[i]) {
      result += word1[i]
      result += word2[i] ? word2[i] : ''
    } else {
      result += word2.substring(i, word2.length)
    }
  }
  return result
}