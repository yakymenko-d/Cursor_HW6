function filterNumbers(arr, maxNumber) {
	let newArr = [];
	arr.filter (number => {
		if (number < maxNumber) {
			newArr.push(number);
		}
	})
	return (newArr);	
}

console.log(filterNumbers([1, 4, 8, 1, 20], 5));
