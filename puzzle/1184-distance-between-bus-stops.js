/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let clock = 0,
    	counterClock = 0,
    	disLen = distance.length
	if (start > destination) {
		[start, destination] = [destination, start]
	}
	for (let i = start; i < destination; i ++) {
		clock += distance[i]
	}
	for (let i = destination; i < start + disLen; i++) {
		if (i >= disLen) {
			counterClock += distance[i - disLen]
		} else {
			counterClock += distance[i]
		}
	}
	return Math.min(clock, counterClock)
};
