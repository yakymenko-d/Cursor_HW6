function printTimeout(str, n) {
    let delay = n * 1000;
    let printStr = function(){
        console.log(str)
    }
    let result = setTimeout(printStr, delay);
}
printTimeout('Hi, support!', 10);