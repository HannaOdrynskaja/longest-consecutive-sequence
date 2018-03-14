module.exports = function longestConsecutiveLength(array) {
    let max = 0;
    let set = [];
    const L =array.length;
	
    if (array.length == 0) {
        return 0;
    } 
 
    for (let i=0; i<L; i++)
        set.push(array[i]);
 
    for (var i=0; i<L; i++) {
		 
		if (!set.includes(array[i]-1)){
			
		let j = array[i];
                while (set.includes(j))
                    j++;
			
		if (max<(j-array[i]))
                max = j-array[i];
		}
     }	
	return max;
}	
 
