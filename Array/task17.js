function asd(arr) {
    var a = arr.length
    var p;
    var index;
    while (a > 0) {
        index = Math.floor(Math.random() * a);
        a--;
        p = arr[a];
        arr[a] = arr[index];
        arr[index] = p;
    }
    return arr;
}
console.log(asd([0, 1, 2, 3]));