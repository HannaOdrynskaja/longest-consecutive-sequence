module.exports = function longestConsecutiveLength(array) {
   var max = 0;
   var set = [];
   var L =array.length;
   if (L == 0) return 0;	
   var count = 0;

    for (var i=0; i<L; i++) {
		if (array.indexOf((array[i]-1)!=1)){
			var j = array[i];			
                while (array.indexOf(j)!=-1)
                    j++;				
			max = Math.max(j-array[i], max);							
		}
	}	
	return max;
}	
  
