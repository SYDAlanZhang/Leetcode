/**
 * @param {string} command
 * @return {string}
 */
let interpret = function(command) {
    return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al")
}