/**
 * @param {number} n
 * @return {string}
 */
let thousandSeparator = (n) => {
    n = n.toString()
    let result = '',
        counter = -1
    for (let i = n.length - 1; i >= 0; i --) {
        if (counter === 2) {
            result = n[i] + '.' + result
            counter = 0
        } else {
            result = n[i] + result
            counter ++
        }
    }
    return result
}

