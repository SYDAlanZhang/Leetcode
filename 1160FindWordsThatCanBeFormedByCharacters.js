/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charArray = chars.split(''),
    result = 0
    for (let i = 0; i < words.length; i++) {
    	if (checkGoodWord(words[i], charArray.slice())) {
    		result += words[i].length
    	}
    }
    return result
};

function checkGoodWord(word, array) {
	for (let j = 0; j < word.length; j++) {
		let index = array.indexOf(word[j])
		if (index !== -1) {
			array.splice(index, 1)
		} else {
			return false
		}
	}
	return true
}