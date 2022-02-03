/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            for (let j = n - 1; j > i; j--) {
                if (nums[j] > nums[i]) {
                    let temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;  
                    let start = i + 1;
                    let end = n - 1;
                    while (i+1 < n-1) {
                        let temp2 = nums[i+1];
                        nums[i+1] = nums[n-1];
                        nums[n-1] = temp2;
                        i++;
                        n--;
                    }
                    return;
                }
            }
        }
    } 
    nums.reverse();
};