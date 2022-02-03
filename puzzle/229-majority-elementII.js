/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Useing Boyer–Moore majority vote algorithm
var majorityElement = function(nums) {
    let listLength = nums.length;
    let finalResult = [];
    let count1 = 0,
        count2 = 0,
        result1 = 0,
        result2 = 1;
    for (let key in nums) {
        let ele = nums[key];
        if (ele == result1) {
            count1 ++;
        } else if (ele == result2) {
            count2 ++;
        } else if (count1 == 0) {
            result1 = ele;
            count1 = 1;
        } else if (count2 == 0) {
            result2 = ele;
            count2 = 1;
        } else {
            count1 --;
            count2 --;
        }
    }
    checkResult(result1);
    checkResult(result2);
    
    return finalResult;
    
    function checkResult(candidate) {
        let finalCount = 0
        for (let key in nums) {
            if (candidate == nums[key]) {
                finalCount ++;
            }
        }
        if (finalCount > listLength/3) {
            finalResult.push(candidate)
        }    
    }
    
};