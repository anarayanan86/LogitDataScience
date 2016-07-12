function totalUpToX(arr1) {
	var results = [];
	var sum = 0;
	for (i = 0; i < arr1.length; i++) {
		sum += arr1[i];
		results.push(sum);
	}
	return results;
}

totalUpToX([2, 3, 1, 4, 0, 2, 4, 6, 1, 5, 10])
