/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
let output=[];
let splitStr = text.split(' ');
    for(let i=0;i<splitStr.length;i++){
        if(splitStr[i] == first && splitStr[i+1] == second){
            if(splitStr[i+2]){
               output.push(splitStr[i+2]); 
            }
            
        }
    }
    return output;
};