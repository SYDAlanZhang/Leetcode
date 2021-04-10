/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let areAlmostEqual = (s1, s2) => {
    let unmatch = false,
        conflict = ''
    for (let i = 0; i < s1.length; i ++ ) {
        if (s1[i] !== s2[i]) {
            if (!unmatch) {
                unmatch = true
                conflict = 
            }
        }
    }
    return true
}
console.log(areAlmostEqual('bank', 'kanb'))