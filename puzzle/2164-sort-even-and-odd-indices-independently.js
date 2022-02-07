/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenOdd = (nums) => {
  const oddList = [],
    evenList = [],
    resultList = []
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      oddList.push(nums[i])
    } else {
      evenList.push(nums[i])
    }
  }
  evenList.sort((a, b) => a - b)
  oddList.sort((a, b) => b - a)
  for (let i = 0; i < nums.length; i ++) {
    if (i % 2) {
      resultList.push(oddList[(i - 1) / 2])
    } else {
      resultList.push(evenList[i / 2])
    }
  }
  return resultList
}

console.log(sortEvenOdd([4,1,2,3]))