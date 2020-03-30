/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if(n == 1) return [0];
  
    let start =Math.floor(n / 2);
    let output =[];
    // for even count
    if(n % 2 == 0){
       for(let i = (-start);i<=start;i++){
            if(i != 0){
                output.push(i);
            }
        }
    }else{ // for odd count
         for(let i = (-start);i<=start;i++){
          output.push(i);
         }
    }
    return output;
    
};



https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/