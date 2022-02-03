let maxOperations = function(nums, k) {
    let result = 0
    for (let i = 0; i < nums.length; i ++) {
        let num = nums[i],
            diff = k - num 
        nums.splice(i, 1)
        console.log(num)
        console.log(diff)
        console.log(nums)
    }
}

console.log(maxOperations([3,1,3,4,3], 6))