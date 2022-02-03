/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	let result = []
    for (let i = left; i <= right; i++) {
    	if (checkSelfDividing(i)) {
    		result.push(i)
    	}
    }
    console.log(result)
    return result
};

function checkSelfDividing(number) {
	let originalNumber = number
	while (number) {
		let digit = number % 10
		number = ~~(number / 10)
		if (!digit || originalNumber%digit !== 0) {
			return false
		}
	}
	return true
}

selfDividingNumbers(1,100)