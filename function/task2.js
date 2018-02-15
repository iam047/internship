var gen = function (num, step) {
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

var task = function(a, index){
    var mas = [];
    for(var i = 0; i < index; i++){
        mas[i] = a();
    };
    return mas;
};
var g1 = gen(6, 7);
console.log(task(g1,5));
