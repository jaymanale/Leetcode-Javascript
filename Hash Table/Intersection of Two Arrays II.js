/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map ={}, output = [];
    
    for(let i=0;i<nums1.length;i++){
        if(!map[nums1[i]]){
             map[nums1[i]] = 1;
        }else{
            map[nums1[i]] += 1;
        }
           
    }
    
    for(let j=0;j<nums2.length;j++){
        if(map[nums2[j]]){
            map[nums2[j]] -= 1;
            output.push(nums2[j]);
        }
    }
return output;
};