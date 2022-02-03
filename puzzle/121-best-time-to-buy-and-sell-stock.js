/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++){
        min = min < prices[i] ? min : prices[i];
        result = prices[i] - min > result ? prices[i] - min : result;
    }
    return result;
};