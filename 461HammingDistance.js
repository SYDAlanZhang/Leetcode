/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    //x XOR y can get 1 on different digits
    //and 0 on the same digits.
    //replace 0 to be '' and count length
    return (x ^ y).toString(2).replace(/0/g, '').length;
};