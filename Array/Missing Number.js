/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
 let sortedArr = nums.sort((a, b) => a - b);
 let lastNum = null;  
 
   for(let i=0; i<=sortedArr[sortedArr.length-1]; i++){
       if(sortedArr[i] != i){
           return i;
       }
       lastNum = i;
   }
    return lastNum + 1;
};