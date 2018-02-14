function recurs3(start, end) {
 var mas = [];
 var step = 1.5;
    while (end >= start) {
        mas.push(start);
        start += step;

    }
  var sa = mas.toString();
    sa[0] = sa[0].replace(/^-?[0-9]+$/);
    return sa;
};

console.log(recurs3(2,8));

var range = function(start, end) {
    if (end - start === 2) {
        return [start + 1];
    } else {
        var list = range(start, end - 1);
        list.push(end - 1);
        return list;
    }
};

console.log(range(2,9));
