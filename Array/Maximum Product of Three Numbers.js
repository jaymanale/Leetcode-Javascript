/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let max1 = -Infinity, 
        max2 = -Infinity,
        max3 = -Infinity,
        min1 = Infinity,
        min2 = Infinity;
        
    for(let num of nums){
        // fetch max
        if(num > max1){
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if(num > max2){
            max3 = max2;
            max2 = num;
        } else if(num > max3){
            max3 = num;
        }
        
        // fetch min
        if(num < min1){
            min2 = min1;
            min1 = num
        } else if(num < min2){
            min2 = num;
        }
    }
    // return max of top 3, or top1 and last 2
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
    
};
 