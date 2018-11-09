/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 1) {
        return 1;
    }
    var maxList = "";
    var maxLength = 0;
    var partMax = 0;
    for (i=0; i<s.length; i++) {
        for (j=i; j<s.length; j++) {
            if (maxList.indexOf(s[j])>-1) {
                if (partMax > maxLength) {
                    maxLength = partMax;        
                }
                maxList = "";
                partMax = 0;
            } else {
                partMax ++;
                maxList += s[j];
            }
            if (j == s.length -1) {
                if (partMax > maxLength) {
                    maxLength = partMax;        
                }
                maxList = "";
                partMax = 0;
            }
        }
    }
    return maxLength;
};