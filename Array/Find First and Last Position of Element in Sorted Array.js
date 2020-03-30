/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
      let first = 0, last = nums.length - 1, out = [];

  while (first <= last) {

    let mid = Math.floor((first + last) / 2);
 
    if (nums[mid] == target) {
      first = last = mid;
      while (nums[first] == target || nums[last] == target) {
       if(nums[first] == target){out[0] = first;}
        if(nums[last] == target){out[1] = last;}
         first--;
        last++;
      }
      return out;

    } else if (nums[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return [-1, -1];
};