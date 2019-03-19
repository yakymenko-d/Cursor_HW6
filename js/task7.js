function minMax(arr) {
	let obj = {};
	obj.max = arr[1];
	obj.min = arr[0];
	for (let i = 0; i < arr.length; i++) {
	    if (arr[0] > arr[i]) {
	      obj.min = arr[i];
	    } else if (arr[1] < arr[i]) {
	      obj.max = arr[i];
	    }
	}
	return (obj);
}

console.log(minMax([1, 4, 8, 2, 20])); 
