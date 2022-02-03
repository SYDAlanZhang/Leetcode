/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let reverseSymbol = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let result = 0;
    let len = s.length-1;
    for (let i = 0; i<len; i++) {
        let currentNum = reverseSymbol[s[i]];
        let nextNum = reverseSymbol[s[i+1]];
        if (currentNum < nextNum) {
            result -= currentNum;
        } else {
            result += currentNum;
        }
    }
    result += reverseSymbol[s[len]];
    return result;
};