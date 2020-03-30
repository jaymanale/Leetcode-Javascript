/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let start = 0;
    
    for(let i= 0;i<moves.length;i++){
        if(moves[i] == 'U'){
            start += 2;
        }else if( moves[i] == 'R'){
            start += 1;
        }else if( moves[i] == 'L'){
            start -= 1;
        }else if( moves[i] == 'D'){
            start -= 2;
        }
    }
    
    return start == 0 ? true : false;
};