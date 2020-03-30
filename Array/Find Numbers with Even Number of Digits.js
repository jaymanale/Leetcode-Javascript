/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenNumCount = 0;
    
    for(let i=0;i<nums.length;i++){
        let numCount = nums[i].toString().length;
        if(numCount % 2 == 0){
            evenNumCount += 1;
        }
    }
    return evenNumCount;
};


