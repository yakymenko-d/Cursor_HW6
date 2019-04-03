function average(arr) {
	let sum = 0;
	arr.forEach(number => {
		sum += number;
	});
	let arrAverage = sum / arr.length;
	let result = arrAverage.toFixed(2);
	return (result);
}

console.log(average([1,4,2]));