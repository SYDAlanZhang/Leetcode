/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
  let left = []
  let mid = []
  let right = []
  for (let i = 0; i < nums.length; i++) {
    currentNum = nums[i]
    if (nums[i] === pivot) {
      mid.push(currentNum)
    } else if (nums[i] >= pivot) {
      right.push(currentNum)
    } else {
      left.push(currentNum)
    }
  }
  return [...left, ...mid, ...right]
}

console.log(pivotArray([9,12,5,10,14,3,10], 10))
