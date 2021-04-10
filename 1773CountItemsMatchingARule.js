/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
let countMatches = (items, ruleKey, ruleValue) => {
    const itemPosition = ['type', 'color', 'name'].indexOf(ruleKey)
    let result = 0
    for (let i = 0; i < items.length; i ++ ) {
        if (items[i][itemPosition] === ruleValue) {
            result ++   
        }
    }
    return result
}