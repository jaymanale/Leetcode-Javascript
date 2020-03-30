/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    
    if(A.length == 0) return false;
    if(A.length == 1) return true;
 
    let start = 0, last = A.length-1;
    let operation ='';
    let output=  true;
    
    if(A[start] > A[last]){
        operation = 'DEC';
    }else if(A[start] < A[last]){
        operation ='INC';
    }else{
        operation ='EQL';
    }
    
    for(let i=0;i<A.length;i++){
       if(operation == 'INC'){
           if(A[i+1]  != undefined && A[i] > A[i+1]){
               output =  false;
           }
       }else if(operation == 'DEC'){
            if(A[i+1]  != undefined && A[i] < A[i+1]){
               output =  false;
           }
       }else{
           if(A[i+1]  != undefined && A[i] != A[i+1]){
               output = false;
           }
       }
    }
    return output;
   
};