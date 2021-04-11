/**
 * @param {number[]} nums
 * @return {number}
 */
let arraySign = (nums) => {
    let negCount = 0
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0) {
            return 0
        } else if (nums[i] < 0) {
            negCount ++
        }
    }
    if (negCount % 2) {
        return -1
    } else {
        return 1
    }
}

console.log(arraySign([-1,-2,-3,-4,3,2,1]))