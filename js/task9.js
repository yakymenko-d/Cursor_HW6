function concatFirstNestedArrays(arr) {
	return (arr.reduce((accumulator, current) => [...accumulator, ...current]));
}

console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); 