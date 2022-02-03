/**
 * @param {number[]} arr
 * @return {boolean}
 */
let threeConsecutiveOdds = (arr) => {
    let isOdd = (num) => {
        return num % 2
    }
    let counter = 0
    for (let i = 0; i < arr.length; i ++) {
        isOdd(arr[i]) ? counter ++ : counter = 0
        if (counter === 3) {
            return true
        }
    }
    return false
}
