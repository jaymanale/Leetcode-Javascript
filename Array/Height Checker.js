/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let originalArr = heights.slice();
    let sortedArr = quick_Sort(heights);
    let p1 = 0, p2 =0,count = 0;
    
    while(p1 < originalArr.length){
        if(originalArr[p1] != sortedArr[p2]){
            count += 1;
        }
        p1++;
        p2++;
    }
    
    return count;
    
};


function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}