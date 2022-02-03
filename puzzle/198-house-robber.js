/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums) {
        dp = [0, nums[0]];
        for (let i = 2; i < nums.length+1; i++) {
        	//decide to include current number or not
            dp[i] = Math.max(nums[i-1] + dp[i-2], dp[i-1]);
        }
        return dp[nums.length];
    } else {
        return 0;
    }
};