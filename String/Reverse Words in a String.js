/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let splitArray = s.split(' ');
    let first = 0,last = splitArray.length-1;
    
    while(first < last){
        let temp = splitArray[first];
        splitArray[first] = splitArray[last];
        splitArray[last] = temp;
        first++;
        last--;
    }
    
    let str =  splitArray.join(' ').trim();
    return str.replace(/  +/g, ' ');
};