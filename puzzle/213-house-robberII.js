/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) {return 0;}
    if (nums.length == 1) {return nums[0]};
    if (nums.length == 2) {return Math.max(nums[0], nums[1])}
    
    let dp = [0, nums[0]],
        dp2 = [0, nums[1]];

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i-1] + dp[i-2], dp[i-1]);
    }
    
    for (let i = 3; i < nums.length+1; i++) {
        dp2[i-1] = Math.max(nums[i-1] + dp2[i-3], dp2[i-2]);
    }

    return Math.max(dp[nums.length-1], dp2[nums.length-1]);

};