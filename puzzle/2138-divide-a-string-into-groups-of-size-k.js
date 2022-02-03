/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = (s, k, fill) => {
  const result = []
  if (s.length % k) {
    s += fill.repeat(k - s.length % k)
  }
  for (let i = 0; i < s.length; i ++) {
    result.push(s.slice(i, i + k))
    i += k - 1
  }
  return result
}

