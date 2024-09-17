/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = (nums) => {

  const result = []

  const set = new Set()

  for (const i of nums) {

    if (set.has(i)) {

      result.push(i)

    } else {

      set.add(i)

    }

  }

  return result
    
}