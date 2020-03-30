/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let output = [];
    let p1 = 0;
    while(p1 < nums.length){
        output.splice(index[p1],0,nums[p1]);
        p1 += 1;
    }
    return output;
};

https://leetcode.com/problems/create-target-array-in-the-given-order/