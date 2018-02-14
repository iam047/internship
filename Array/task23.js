function diff (a,b) {
    return b.filter(function(i){
        return a.indexOf(i) < 0;
    });
};

var a = [1,4,5,6];
var b = [1,5,62,141,5];

var result = diff(a,b);
console.info(result);