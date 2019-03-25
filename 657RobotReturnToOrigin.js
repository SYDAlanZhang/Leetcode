/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    /** solution one, but count each moves is not necessary
    totalMove = {};
    for (let i in moves) {
        if (totalMove[moves[i]]) {
            totalMove[moves[i]] ++;
        } else {
            totalMove[moves[i]] = 1;
        }
    }
    if (totalMove["L"] == totalMove["R"] && totalMove["U"] == totalMove["D"]) {
        return true;
    } else {
        return false;
    }
    **/
    // solution two, only count vertical and horizontal value
    let x = 0,
        y = 0;
    for (let i = 0; i < moves.length; i++) {
        switch(moves[i]) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "R":
                x++;
                break;
            case "L":
                x--;
                break;
        }
    }
    return !(x||y)
};