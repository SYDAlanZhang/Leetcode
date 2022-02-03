/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // Solution one: return str.toLowerCase();
    // An easy solution could be using the toLowerCase() function.
    // However, for the reason of practising, I tried the solution on ASCII level.
    // Add 32 to the uppercase chars and change them to lowercase.
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
            str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 32));
        }
    }
    return str;
};