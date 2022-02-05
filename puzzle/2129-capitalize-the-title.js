/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = (title) => {
  const splitTitle = title.toLowerCase().split(' ')
  for (let i = 0; i < splitTitle.length; i++) {
    const currentWord = splitTitle[i]
    if (currentWord.length > 2) {
      splitTitle[i] = currentWord.charAt(0).toUpperCase() + currentWord.substring(1)
    }
  }
  return splitTitle.join(' ')
}
