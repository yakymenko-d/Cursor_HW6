function factorial(n) {
    if (n !== 1) {
        return n * factorial(n-1);
    }
    return n;
}

console.log('Factorial = ', factorial(3));
console.log('Factorial = ', factorial(5));