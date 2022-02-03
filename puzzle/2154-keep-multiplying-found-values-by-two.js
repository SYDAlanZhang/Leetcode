/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
	if (nums.includes(original)) {
		return findFinalValue(nums, original * 2)
	} else {
		return original
	}
}
