/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
   
    let map ={};
    let bannedWord = {};
    let max = -Math.pow(10,1000);
    let word ='';
    let splitStr = paragraph.replace(/[^a-zA-Z]+/g, ' ').toLowerCase().split(' ');
     if(splitStr[splitStr.length-1] == ''){
  splitStr.length = splitStr.length-1;
}
  console.log(splitStr);
    for(let i=0;i<splitStr.length;i++){
        if(!map[splitStr[i]]){
            map[splitStr[i]] = 1;
        }else{
            map[splitStr[i]] += 1;
        }
    }
    

    
   if(banned.length){
     for(let i=0;i<banned.length;i++){
       bannedWord[banned[i]] = true;
     }
   }
console.log(map);
for(let char in map){
  if(banned.length){
   if(!bannedWord[char]){
      if(max < map[char]){
        max = map[char];
        word = char
      }
    
  }
  }else{
    word = char;
  }
}

return word;
};