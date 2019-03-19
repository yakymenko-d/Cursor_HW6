function sumAll(n) {
    if (n !== 1) {
        return n + sumAll(n-1);
    }
    return n;
}

console.log('Sum = ', sumAll(2));
console.log('Sum = ', sumAll(4));