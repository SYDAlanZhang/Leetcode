/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
	let slope = undefined
    for (let i = 0; i < coordinates.length - 1; i ++) {
    	let currentSlop = (coordinates[i + 1][1] - coordinates[i][1]) / (coordinates[i + 1][0] - coordinates[i][0])
    	if (slope === undefined) {
    		slope = currentSlop
    	} else if (slope != currentSlop) {
    		return false
		}
    }
    return true
};
