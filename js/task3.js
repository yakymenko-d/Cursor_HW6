function bombTimer(str, time) {
    let timer = () => {
    	console.log(time);
    	time--;
		if (time === 0) {
       		setTimeout(() => console.log(str), 1000);
       		clearInterval(interval);
  		}
   	}
   	let interval = setInterval(timer,1000);
}

bombTimer('Boooom', 3);