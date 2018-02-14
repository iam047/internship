var generator = function (num, step) {
    var number = num;
    return function () {
        if(step) {
            var res = number;
            number += step;
            return res;
        } else {
            return ++number
        }

    }
};
var g1 = generator(4);
var g2 = generator(7,2);
console.log(g1());
console.log(g1());
console.log(g1());
console.log(g1());
console.log(g2());
console.log(g2());
console.log(g2());
console.log(g2());
console.log(g2());
console.log(g2());