var arr1 = [1.5,2,3,4];
var arr2 = [2,4,5.6,6];
function arr (a, b) {
    var result = [];
    var i = 0;
    while (i < a.length && i < b.length) {
        result.push(a[i] + b[i]);
        i++;
    }
    return console.log(result);
}
arr(arr1, arr2);