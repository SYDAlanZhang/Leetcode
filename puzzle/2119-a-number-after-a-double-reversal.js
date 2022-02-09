/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = (num) => {
  return num.toString().length === 1 || num % 10 !== 0
}
