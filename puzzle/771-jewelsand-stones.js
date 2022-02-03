/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let result = 0;
    for (let key in S) {
        if (J.indexOf(S[key]) > -1) {
            result ++;
        }
    }
    return result;
};