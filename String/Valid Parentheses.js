/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    
    for(let i=0;i<s.length;i++){
        if(s[i] == ']' || s[i] == ')' || s[i] == '}'){
            let top = stack.pop();
             
            if(s[i] == ']' && top != '['){ return false; }
            if(s[i] == '}' && top != '{'){ return false; }
            if(s[i] == ')' && top != '('){ return false; }
                
          
        }else{
            stack.push(s[i]);
        }
    }
    return stack.length ? false : true;
};