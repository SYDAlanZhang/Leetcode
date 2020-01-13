/**
 * @param {number[]} nums
 * @return {number}
 */
let findNumbers = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += nums[i].toString().length % 2 ? 0 : 1
    }
    return result
};
