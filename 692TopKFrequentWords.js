/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    mapList = {};
    for (let key in words) {
        if(mapList[words[key]]) {
            mapList[words[key]] += 1;
        } else {
            mapList[words[key]] = 1;
        }
    }
    return Object.keys(mapList).sort((a,b)=>{
        if(mapList[a] !== mapList[b]){ //if count is different
            return mapList[b]-mapList[a]
        }else{ //if count is the same, compare their keys
            return a < b ? -1: 1
        }
    }).slice(0,k)
};