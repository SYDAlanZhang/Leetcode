/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) => {
  let maxNumber = 0
  for (let i = 0; i < sentences.length; i ++) {
    const sentenceLength = sentences[i].split(' ').length
    if (maxNumber < sentenceLength) {
      maxNumber = sentenceLength
    }
  }
  return maxNumber
}
