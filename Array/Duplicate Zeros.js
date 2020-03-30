/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
     
    let start = 0;
    while(start < arr.length){
        if(arr[start] == 0){
            arr.pop();
            arr.splice(start,0,0);
            start++;
        }
        start++;
    }
};

 