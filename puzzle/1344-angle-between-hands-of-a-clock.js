/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
let angleClock = function(hour, minutes) {
    let minuteAngle = minutes * 6,
        hourAngle = hour % 12 * 30 + minutes / 2,
        diff = Math.abs(minuteAngle - hourAngle)
    return Math.min(diff, 360 - diff)
};
