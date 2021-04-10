/**
 * @param {string} coordinates
 * @return {boolean}
 */
let squareIsWhite = (coordinates) => {
    return coordinates[0].charCodeAt(0) % 2 ^ coordinates[1].charCodeAt(0) % 2
}
