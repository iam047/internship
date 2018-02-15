var square = function (x) {
     return x * x;
};
var arr = [1,2,3,4];

function map(fn, arr) {
    var mas = [];
    for(var i = 0; i <arr.length; i++){
        mas[i] = fn(arr[i]);
    };
    return mas;
};

console.log(map(square,arr));
