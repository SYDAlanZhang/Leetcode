/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) => {
  nums = num.toString().split('').sort((a, b) => a - b)
  return Number(nums[0] + nums[3]) + Number(nums[1] + nums[2])
}
