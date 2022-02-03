var findAndReplacePattern = function(words, pattern) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let map = {},
            flag = true,
            set = new Set();
        for (let j = 0; j < pattern.length; j ++) {
            if (map[pattern[j]] === undefined) {
                map[pattern[j]] = words[i][j];
                if (set.has(words[i][j])) {
                    flag = false;
                } else {
                    set.add(words[i][j]);
                }
            } else {
                if (map[pattern[j]] != words[i][j]) {
                    flag = false;
                } else {
                    continue;
                }
            }
        }
        if(flag) {
            result.push(words[i]);
        }
    }
    return result;
};