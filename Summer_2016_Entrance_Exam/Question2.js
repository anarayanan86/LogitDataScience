function combine(arr1, arr2) {
	var subArray = [];
	var superArray = [];
	for (i = 0; i < arr1.length; i++) {
		for (k = 0; k < arr2.length; k++) {
			subArray.push(arr1[i], arr2[k]);
			superArray.push(subArray);
			subArray = [];
		}
	}
	return superArray;
}

combine([1, 2], [10, 20, 30, 40])
