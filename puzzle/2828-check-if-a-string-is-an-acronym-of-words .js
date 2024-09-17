/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
const isAcronym = (words, s) => {

	words.unshift('')

	const initials = words.reduce((result, word) => {
		result += word[0]
		return result
	})

	return initials === s

}
