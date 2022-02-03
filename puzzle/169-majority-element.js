/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let listLength = nums.length;
    if (listLength == 1) {
        return nums[0];
    }
    let countList = {};
    for (let key in nums) {
    	let ele = nums[key];
        if (countList[ele]) {
            countList[ele] ++;
            if (countList[ele] > listLength/2) {
                return ele;
            }
        } else {
            countList[ele] = 1;
        }
    }
};