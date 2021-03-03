function _flat(_list, arr) {
	var result = arr || [];
	for (let i = 0; i < _list.length; i++) {
		if (typeof _list[i] == 'number') {
			result.push(_list[i])
		}
		else {
			_flat(_list[i], result)
		}
	}
	return result
}

var test = [1, [1, 2, 3], [2, 5, 6], [1, [2, [4]]]]

console.log(_flat(test))