/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
 let val = 0,count =0;
 for(let char of s){
   if(char == 'R'){
     val++;
   }else{
     val--;
   }

   if(val == 0){
     count++;
     val = 0;
   }
 }
 return count;
};