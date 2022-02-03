/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let totalSet = new Set();
    for (let i = 0; i<emails.length; i++) {
        let splitAt = emails[i].split('@');
        let splitAdd = splitAt[0].split('+');
        let singleBase = splitAdd[0].replace(/./g, '') + splitAt[1];
        totalSet.add(singleBase);
    }
    return totalSet.size;
};