function average(arr) {
	let sum = 0;
	arr.forEach(number => {
		sum += number;
	});
	let arrAverage = sum / arr.length;
	return (arrAverage);
}

console.log(average([1,4,2]));