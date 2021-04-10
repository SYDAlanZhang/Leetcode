/**
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs = (nums) => {
  let result = 0,
    numberMap = {}
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i]
    if(!numberMap[currentNum]) {
      numberMap[currentNum] = 1
    } else {
      result += numberMap[currentNum]
      numberMap[currentNum] ++
    }
  }
  return result
};
console.log(numIdenticalPairs([1,1,1,1]))