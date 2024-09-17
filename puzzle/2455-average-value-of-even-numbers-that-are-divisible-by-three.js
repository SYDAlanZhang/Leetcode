const averageValue = (nums) => {

  const numList = nums.filter(num => !(num % 6))

  return numList.length > 0 ? numList.reduce((a, b) => a + b) / numList.length | 0 : 0

}

console.log(averageValue([94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]))