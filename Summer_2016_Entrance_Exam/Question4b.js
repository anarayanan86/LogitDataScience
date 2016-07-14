function std(A) {
	var sum = 0;
	for (i = 0; i < A.length; i++) {
		sum  += A[i]
	}
	var mean = sum/A.length;
	var squaredDiffs = A.map(function(value) {		//find the difference between each value in the array and the mean, then square them
		var diff = value - mean;
		var square = diff * diff;
		return square;		
	});
	var sumSquaredDiffs = 0;						//mean of the square of differences between each element and mean
	for (j = 0; j < squaredDiffs.length; j++) {
		sumSquaredDiffs += squaredDiffs[j]
	}
	var avgSquaredDiffs = sumSquaredDiffs/squaredDiffs.length;
	var stdDev = Math.sqrt(avgSquaredDiffs);		//square root of the mean of the squared differences
	return stdDev;
}
