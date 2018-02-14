function mas(n, val)
{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}

console.log(mas(6, 'asfaf'));
console.log(mas(1, 'gdsga'));