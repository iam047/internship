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
function kvad(x) { return x * x; };
function add(a, b) {
    return a + b;
};
function func(a, b) {
    return function() {
        return a(b());
    };
}

var fun = func( kvad,  generator(7,2) );

console.log(fun());
console.log(fun());
console.log(fun());


function fmap(a, gen, ...args) {
    return function(...args){
        return a(gen(...args));
    }
}
var sd = fmap(kvad, add);
console.log(sd(2,6));