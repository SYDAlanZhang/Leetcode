/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = (s) => {
  if (s.indexOf('b') === -1) return true
  return s.indexOf('b') > s.lastIndexOf('a')
}
