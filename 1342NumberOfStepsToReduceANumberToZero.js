/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps  = function(num) {
    let result = 0
    while (num) {
        num % 2 ? num -- : num = num / 2
        result ++
    }
    return result
};
