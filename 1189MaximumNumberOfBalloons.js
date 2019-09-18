/**
 * @param {string} text
 * @return {number}
 */

/*
 * Method 1
 */

// var maxNumberOfBalloons = function(text) {
// 	let pattern = 'balloon',
// 		result = 0
// 	while (true) {
// 		text = scrapeWord(pattern, text)
// 		if (text || text === '') {
// 			result ++
// 		} else {
// 			break
// 		}
// 	}
// 	return result
// };

// function scrapeWord(pattern, text) {
// 	for (let i = 0; i < pattern.length; i++) {
// 		let char = pattern[i]
// 		let index = text.indexOf(char)
// 		if (index > -1) {
// 			text = text.slice(0,index) + text.slice(index + 1)
// 		} else {
// 			return false
// 		}
// 	}
// 	return text 
// }

/*
 * Method 2 Using more space but much faster!
 */

var maxNumberOfBalloons = function(text) {
	let balloonHolder = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
	for (let i = 0; i < text.length; i ++) {
		if (balloonHolder[text[i]] !== undefined) { balloonHolder[text[i]] ++ }
	}
	return Math.min(balloonHolder['b'],balloonHolder['a'], balloonHolder['l'] / 2, balloonHolder['o'] / 2, balloonHolder['n'])
}
