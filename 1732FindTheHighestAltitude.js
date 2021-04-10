/**
 * @param {number[]} gain
 * @return {number}
 */
let largestAltitude = function(gain) {
    let result = 0,
        current = 0
    for (let i = 0; i < gain.length; i ++) {
        current = result + gain[i]
        if (current > result) {
            result = current
        }
    }
    return result
}

largestAltitude([-5,1,5,0,-7])