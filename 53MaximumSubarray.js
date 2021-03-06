/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [];
    let max = nums[0];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i-1]>0? (dp[i-1]+nums[i]):(0+nums[i]);
        max = Math.max(max, dp[i])
    }
    return max;
};