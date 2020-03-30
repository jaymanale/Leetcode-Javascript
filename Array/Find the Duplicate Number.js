/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let prev = 0;
    let sortedArr = nums.sort((a,b) => a-b);
    for(let i=0;i<sortedArr.length;i++){
        if(sortedArr[i] == prev){
            return sortedArr[i];
        }
        prev = sortedArr[i];
    }
}; 