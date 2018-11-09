/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let symbol = 1;
    if (x < 0) {
        symbol = -1;
    }
    x = Math.abs(x);
    let result = 0;
    let temp = x;
    
    for (let i=0; i<x.toString().length; i++) {
        let partResult = temp%10;
        temp = Math.floor(temp/10);
        result = result*10 + partResult;
    }
    if (result > 0x7FFFFFFF) {
        return 0;
    }
    
    return result*symbol;    

};