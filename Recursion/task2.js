function recurs2(a, b) {
    if ( ! b) {
        return a;
    }
    return recurs2(b, a % b);
};
console.log(recurs2(54,24));

function recurs(a, b) {
    return ( a % b);
};

console.log(recurs(54,24));