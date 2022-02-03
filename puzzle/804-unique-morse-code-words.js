/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
	let resultMap = {};
	for (let i in words) {
		let morseWord = "";
		for (let j in words[i]) {
			morseWord += morseCode[words[i][j].charCodeAt(0)-97];
		}
		resultMap[morseWord] = 0;
	}
	return Object.keys(resultMap).length;    
};