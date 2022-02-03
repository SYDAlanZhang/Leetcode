/**
 * @param {number[]} arr
 * @return {number[]}
 */
let replaceElements = function(arr) {
    let maxEle = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentEle = arr[i]
        arr[i] = maxEle
        if (currentEle > maxEle) { maxEle = currentEle }
    }
    return arr
};
//[18,6,6,6,1,-1]

replaceElements([17,18,5,4,6,1])