/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let output = [];
    for(let i=0;i<nums.length;i++){
        let count =0;
        for(let j=0;j<nums.length;j++){
            if(i != j && nums[j] < nums[i]){
                count += 1;
            }
        }
        output.push(count);
    }
    return output;
};


