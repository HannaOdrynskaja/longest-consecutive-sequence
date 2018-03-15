module.exports = function longestConsecutiveLength(array) {
   var max = 0;
    var count = 1;
	var L = array.length;
	if (L == 0) return 0;
    array = array.sort((a, b) => a - b);   
    
    for (let i = 0; i <= L; i++) {
        if (array[i] + 1 == array[i + 1]) {
            count++; 
        } else if (array[i + 1] == array[i]) {
            continue; 
        } else {
            
            max = Math.max(count, max);
            count = 1; 
        }
    }
    return max;
};
