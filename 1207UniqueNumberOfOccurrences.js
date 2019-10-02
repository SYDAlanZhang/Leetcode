/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	let countList = {},
		compareSet = new Set()
    for (let i = 0; i < arr.length; i++) {
    	if (countList[arr[i]]) {
    		countList[arr[i]] ++
    	} else {
    		countList[arr[i]] = 1
    	}
    }
    for (let key in countList) {
    	compareSet.add(countList[key])
	}
	return compareSet.size === Object.keys(countList).length
};
