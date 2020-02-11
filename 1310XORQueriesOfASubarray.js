/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

// Method 1: brute force solution
// let xorQueries = function(arr, queries) {
//     let result = []
//     for (let j = 0; j < queries.length; j ++) {
//         let [start, end] = queries[j],
//             element = 0
//         for (let k = start; k < end + 1; k ++) {
//             element ^= arr[k]
//         }
//         result.push(element)
//     }
//     return result
// };


// Method 2


xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]])