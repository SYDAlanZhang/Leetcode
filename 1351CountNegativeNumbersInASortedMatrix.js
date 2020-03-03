/**
 * @param {number[][]} grid
 * @return {number}
 */
let countNegatives = function(grid) {
    let result = 0
    for (let i = 0; i < grid.length; i++) {
        let currentGrid = grid[i]
        for (let j = 0; j < currentGrid.length; j++) {
            if (currentGrid[j] < 0) {
                result ++
            }
        }
    }
    return result    
};
