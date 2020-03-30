/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    let map ={}, count = 0;
    for(let i=0;i<J.length;i++){
        if(!map[J[i]]){
            map[J[i]] = true;
        }
    }
    
    for(let m = 0;m<S.length;m++){
        if(map[S[m]]){
            count +=1;
        }
    }
    return count;
};