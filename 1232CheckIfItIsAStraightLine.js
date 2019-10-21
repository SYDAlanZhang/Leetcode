/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slope = undefined
    for (let i = 0; i < coordinates.length - 1; i ++) {
        let currentSlope = (coordinates[i + 1][1] - coordinates[i][1]) / (coordinates[i + 1][0] - coordinates[i][0])
        if (slope === undefined) {
            slope = currentSlope
        } else if (slope != currentSlope) {
            return false
        }
    }
    return true
};
