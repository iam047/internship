function sum(a, b) {
    while(b === 0) {
        return 1;
        }
    return a * sum(a, b-1);
}

console.log(sum(2,7));