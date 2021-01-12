/**
 * @param {string} s
 * @return {string}
 */
let sortString = function(s) {
    let sortedArrayS = s.split('').sort(),
        resultArray = []
    while (resultArray.length < s.length) {
        let previousValueASC = '',
            previousValueDESC
        for (let i = 0; i < sortedArrayS.length; i ++) {
            if (sortedArrayS[i] && sortedArrayS[i] !== previousValueASC) {
                previousValueASC = sortedArrayS[i]
                resultArray.push(previousValueASC)
                sortedArrayS.splice(i, 1)
                i --
            }
        }
        for (let i = sortedArrayS.length; i > 0; i --) {
            if (sortedArrayS[i] && sortedArrayS[i] !== previousValueDESC) {
                previousValueDESC = sortedArrayS[i]
                resultArray.push(previousValueDESC)
                sortedArrayS.splice(i, 1)
            }
        }
    }
    return resultArray.join('')
};
