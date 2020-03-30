/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map ={}, minVal = -1;
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
            map[nums[i]] += 1;
        }
      }
    
    for(let j=0;j<nums.length;j++){
        if(map[nums[j]] == 1){
            minVal =  nums[j];
        }
    }
    return minVal;
  
};