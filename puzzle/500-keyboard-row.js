/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let set = {'q':0, 'w':0, 'e':0, 'r':0, 't':0, 'y':0, 'u':0, 'i':0, 'o':0, 'p':0, 
               'a':1, 's':1, 'd':1, 'f':1, 'g':1, 'h':1, 'j':1, 'k':1, 'l':1,
               'z':2, 'x':2, 'c':2, 'v':2, 'b':2, 'n':2, 'm':2};
    let result = [];
    for (let i in words) {
        let word = words[i].toLowerCase(),
            belong = set[word[0]],
            flag = 0;
        
        for (let j in word) {
            if (belong != set[word[j]]) {
                flag = 1;
                break;
            }
        }
        if (!flag) {result.push(words[i])};
    }
    return result;
};