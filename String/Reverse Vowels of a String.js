/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let splitArray = s.split('');
    let first = 0, last = splitArray.length-1;
    let map = {
        'a':true,
        'e':true,
        'i':true,
        'o':true,
        'u':true,
        'A':true,
        'E':true,
        'I':true,
        'O':true,
        'U':true
    };
    while(first < last){
    
        if(map[splitArray[first]] && map[splitArray[last]]){
            let temp = splitArray[first];
            splitArray[first] = splitArray[last];
            splitArray[last] = temp;
            first++;
            last--;
        }else if(map[splitArray[first]]){
            last--;
        }else {
            first++;
        }
    }
    return splitArray.join('');
 
};