/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let K = S.split('');
    let result = '';
    for (let i=0, j=K.length-1;i<=j; i++,j--) {
        if (isLetter(K[i])) {
            if (isLetter(K[j])) {
                let temp = K[i];
                K[i] = K[j];
                K[j] = temp;
            } else {
                i --;
            }    
        } else {
            if (isLetter(K[j])) {
                j ++;
            }
        }
    }
    for (let z=0; z<K.length; z++) {
        result += K[z];    
    }
    return result;
    
    function isLetter(letter) {
      return letter.toLowerCase() != letter.toUpperCase();
    }
};