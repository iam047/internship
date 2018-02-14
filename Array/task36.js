function mas(n, val)
{
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}

console.log(mas(6, 0));
console.log(mas(4, 11));