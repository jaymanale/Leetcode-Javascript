/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map ={};
    let uniqArr = [];
    for(let i=0;i<arr.length;i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1;
            uniqArr.push(arr[i]);
        }else{
            map[arr[i]] += 1;
        }
    }
    
    for(let i=0;i<uniqArr.length;i++){
        for(let j=i+1;j<uniqArr.length;j++){
            if(map[uniqArr[i]] == map[uniqArr[j]]){
                return false;
            }
        }
    }
    
    return true;
};