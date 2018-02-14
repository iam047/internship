function asd(a, b) {
    var c = a.concat(b);
    var len = c.length;
    var sort = c.sort();
  console.log(sort);
    while (len--) {
        if (sort[len] == sort[len-1]) {
            sort.splice(len, 1);
        }
    }
    console.log(sort);
};

var a = [1, 3, 4, 5, 5];
var b = [2, 4, 5, 5, 7];
asd(a,b);

