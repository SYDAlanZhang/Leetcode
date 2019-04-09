/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let resultArray = [],
            count = 0;
    for (let i = 0; i < S.length; i++) {
        S[i] === '(' ? count ++ : count --;
        if ((S[i] === '(' && count != 1) || (S[i] === ')' && count != 0)) {
            resultArray.push(S[i]);
        }
    }    
    return resultArray.join('');
};