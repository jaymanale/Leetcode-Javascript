/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
       let map={};
  let output =[];
 
    for(let i=0;i<arr1.length;i++){
      if(!map[arr1[i]]){
        map[arr1[i]] = 1;
      }else{
        map[arr1[i]] += 1;
      }
    }
  
    for(let i=0;i<arr2.length;i++){
     if(map[arr2[i]]){
       for(let j=0;j<map[arr2[i]];j++){
        output.push(arr2[i]);
        }
      }
       map[arr2[i]] = 0;
    }


if(output.length != arr1.length){
  for(let num in map){
    if(map[num]){
       for(let j=0;j<map[num];j++){
        output.push(Number(num));
        }
    }
  }
}
return output;
};