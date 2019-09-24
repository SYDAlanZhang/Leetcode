/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
	let result = [],
		minNum = Number.MAX_SAFE_INTEGER
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length - 1; i++) {
		let diff = arr[i + 1] - arr[i]
		if (diff < minNum) {
			result = [[arr[i], arr[i + 1]]]
			minNum = diff
		} else if (diff === minNum) {
			result.push([arr[i], arr[i + 1]])
		}
	}
	return result
};
