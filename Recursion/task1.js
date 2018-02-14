function recurs1(a) {
    return a ? a * recurs1(a - 1) : 1;
}
var rer = recurs1(5);
console.log(rer);

