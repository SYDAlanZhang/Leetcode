/**
 * @param {number[][]} mat
 * @return {number}
 */
let diagonalSum = function(mat) {
    let matLength = mat.length,
        startNode = 0,
        endNode = matLength - 1,
        sum = 0
    for (let i = 0; i < matLength; i ++) {
        if (startNode === endNode) {
            sum += mat[i][startNode]
        } else {
            sum += mat[i][startNode]
            sum += mat[i][endNode]
        }
        startNode ++
        endNode --
    }
    return sum
}

console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]))
console.log(diagonalSum([[5]]))
console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]))