function isAnagrams(P, Q) {
	if (P.length != Q.length) {
		return false;
	}
	if (P === Q) {
		return true;
	}
	var letters = P.toLowerCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split("").sort(); //make P all lowercase, remove spaces & punctuation, convert into array, and then sort alphabetically
	for (i = 0; i < letters.length; i++) {
		var toCompare = Q.toLowerCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split("").sort() //do the same we did with P to Q
		if (letters[i] !== toCompare[i]) {
			return false;
		}
	}
	return true;
}			
