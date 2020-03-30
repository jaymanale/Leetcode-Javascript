/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let output = [];
  for (let i = 1; i <= numRows; i++) {
    let temp = [];
    temp.length = i;
    temp[0] = 1;
    temp[temp.length - 1] = 1;
    output.push(temp);
  }

  for (let i = 1; i < output.length; i++) {
    let j = 1;
    let p1 = 0, p2 = 1;

    if (output[i + 1]) {
      let insideArray = output[i + 1];
      while (!insideArray[p2]) {
        if (!insideArray[j]) {
          output[i + 1][j] = output[i][p1] + output[i][p2]
          j++;
          p1++;
          p2++;
        }
      }
    }
    p1 = 0;
    p2 = 1;
    j = 1;
  }

  return output;
    
};