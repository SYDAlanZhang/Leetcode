/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = []
    for(let i = 1; i < n + 1; i ++) {
        if (ifFiveThree(i)) {
            result.push('FizzBuzz')
        } else if (ifFive(i)) {
            result.push('Buzz')
        } else if (ifThree(i)) {
            result.push('Fizz')
        } else {
            result.push(`${i}`)
        }
    }
    return result
};

function ifFiveThree(num) {
    if (num % 5 === 0 && num % 3 === 0) {return true} else {return false}
}

function ifFive(num) {
    if (num % 5 === 0) {return true} else {return false}
}

function ifThree(num) {
    if (num % 3 === 0) {return true} else {return false}
}