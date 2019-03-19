function bombTimer(str, time) {
    let timer = () => {
        console.log(time);
        if (time === 1) {
            setTimeout(() => console.log(str), 1000);
            clearTimeout(settingTimes);
        }
        while (time > 1 ) {
            return bombTimer(str, time - 1 );
        }
    }
    let settingTimes = setTimeout(timer,1000);
}

bombTimer('Boooom', 3);
