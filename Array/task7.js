var arr = [12, 1142, 15251, 214, -21412];

arr.sort(function (a,b) {
    if(a < b) {
        return b;
    } else {
        return a;
    }
});
console.log(arr);