/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let map ={};
    let max = -Math.pow(10,1000);
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
            map[nums[i]] += 1;
        }
    }
    
    
    for(let i=0;i<nums.length;i++){
        let len = nums.length / 2;
        
        if(map[nums[i]] > len){
            if(max < map[nums[i]]){
                max = nums[i];
            }
        }
    }
    return max;
};