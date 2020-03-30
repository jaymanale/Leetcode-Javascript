/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let splitArr = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase().split('');
    let p1 = 0,p2 = splitArr.length-1;
    
     while(p1 < p2){
   if(splitArr[p1] == splitArr[p2]){
     p1 += 1;
     p2 -= 1;
   }else{
     return false;
   }
 }
 return true;

};