/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N == 0) return 0;
    if(N == 1) return 1;
    
  let first = 0,second = 1;
  let count = 2;
  let array = [0,1];
  
  while(count < N){
    let temp = second
    second = first + second;
    first = temp;
    array.push(second);
    count++;
  }
return (array[array.length-1] + array[array.length-2] );
};