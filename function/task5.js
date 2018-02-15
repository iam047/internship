var add5 = qwe(add, 5);
console.log(add5(2));
console.log(add5(10,6));
console.log(add5(8));


function qwe(fn, ...asd) {
    return function(...arg) {
        return fn.apply(null, asd.concat(arg));
    }
}

function add(a, b) {
    return a + b;
}

var add2 = function (a, b) {
    return a + b;
};
var add3 = add2.bind(null, 5);

console.log(add3(2));


