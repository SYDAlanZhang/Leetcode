/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = (matrix) => {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    const horizontalSet = new Set()
    const verticalSet = new Set()
    for (let j = 0; j < n; j ++) {
      horizontalSet.add(matrix[i][j])
      verticalSet.add(matrix[j][i])
    }
    if (horizontalSet.size !== n || verticalSet.size !== n) {
      return false
    }
  }
  return true
}

