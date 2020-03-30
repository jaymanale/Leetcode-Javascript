/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = {};
    for(let i=0;i<A.length;i++){
        if(!map[A[i]]){
            map[A[i]] = 1;
        }else{
            map[A[i]] += 1
            if(map[A[i]] > 1){
                return A[i];
            }
        }
    }
};