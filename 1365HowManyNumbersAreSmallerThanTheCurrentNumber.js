/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = function(nums) {
    let sortNums = nums.slice().sort((a, b) => a - b),
        result = []
    console.log(nums)
    console.log(sortNums)
    for (let i = 0; i < nums.length; i ++) {
        result.push(sortNums.indexOf(nums[i]))
    }
    return result
};
