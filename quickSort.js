var mlist = [1, 2, 3, 13, 18, 34, 4, 5, 7, 8, 11, 1, 2, 3, 13, 18, 34, 4, 5, 7, 8, 11]

function quickSort(disList) {
	if (disList.length <= 1) return disList;
	var left = [], right = [];
	var midIndex = disList.length >> 2;
	for (let i = 0, length = disList.length; i < length; i++) {
		if (i == midIndex) {
			continue
		}
		disList[i] > disList[midIndex] ? right.push(disList[i]) : left.push(disList[i]);
	}
	return quickSort(left).concat(disList[midIndex]).concat(quickSort(right))
}


console.log(quickSort(mlist))