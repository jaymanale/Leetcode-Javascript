/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let max = nums.length;
    let p1 = 0, output= [];
    nums = nums.sort(sorted)
    let prev =  -Infinity;
    for(let i=0;i<nums.length;i++){
            if(prev == nums[i]){
                nums.splice(i,1);
            }
        prev = nums[i];
        
    }
    
    for(let i=1;i<=max;i++){
        if(i != nums[p1]){
            output.push(i);
        }else{
           p1++;  
        }
       
    }
    return output;
};

function sorted(a,b){
    return a - b;
}