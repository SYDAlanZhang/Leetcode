/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
let daysBetweenDates = function(date1, date2) {
    return Math.abs(new Date(date1) - new Date(date2)) / (60 * 60 * 24 * 1000)
};