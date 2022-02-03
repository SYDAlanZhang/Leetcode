/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    var i = 0,
        j = 0;
    while (true) {
        if (i<name.length && j<typed.length) {
            if (name[i] == typed[j]) {
                i ++;
                j ++;
            } else {
                if (typed[j] == typed[j-1]) {
                    j ++;
                } else {
                    return false;
                }
            }
        } else {
            if (name[name.length-1] ==typed[typed.length-1]) {
                return true;
            } else {
                return false;    
            }
        }
    }
};