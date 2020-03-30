/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = -Infinity,mid = -Infinity,min = Infinity;

     for(let num of nums){
   
       if(num > max){
         min = mid;
         mid = max;
         max = num;
       }else if(num > mid && num < max){
         min = mid;
         mid = num;
       }else if(num > min && num < mid){
          min = num;
       }
     }
  return (min > -Infinity) ? min : max;
 
};