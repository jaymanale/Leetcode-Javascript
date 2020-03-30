/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    let max = -Math.pow(10,1000);
    let index = null;
    for(let i=0;i<nums.length;i++){
        if(max < nums[i]){
            max = nums[i];
            index = i;
        }
    }
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] != max){
            if(nums[i] * 2 > max){
                return -1;
            }
        }
    }
    
    return index;
    
};