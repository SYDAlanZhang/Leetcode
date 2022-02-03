/**
 * @param {number[]} cost
 * @return {number}
 */
const minimumCost = (cost) => {
  let totalCost = 0
  cost.sort((a, b) => b - a)
  for (let i = 0; i < cost.length; i ++) {
    if ((i + 1) % 3) {
      totalCost += cost[i]
    }
  }
  return totalCost
}
