/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = (nums) => {
	let count = 0
	const max = Math.max(...nums),
		min = Math.min(...nums)
	for (let i = 0; i < nums.length; i ++) {
		if (nums[i] !== max && nums[i] !== min) {
			count ++
		}
	}
	return count
}
