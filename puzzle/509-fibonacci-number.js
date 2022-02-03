/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
	let dp = [0, 1];
	for (let i = 2; i < N + 1; i++) {
		dp[i] = dp[i-2] + dp[i-1];
	}
	return dp[N];
};