/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
  let newArray = [],p1=0, numsLength = nums.length, startIndex = 0;
  if(k < numsLength){
startIndex = numsLength  - k;
  }else{
    startIndex = numsLength - (k %  numsLength);
  }

  if( k >= numsLength){
      if(numsLength % k === 0 || k === 0){
            return nums;
          }
  }
  
  while(newArray.length != numsLength){
          if(startIndex < numsLength){
              newArray.push(nums[startIndex]);
               startIndex +=1;
          }
          
          if(startIndex === numsLength){
            newArray.push(nums[p1])
            p1 +=1;
          } 
  }
    return nums = [...newArray];
//  console.log(newArray);
};