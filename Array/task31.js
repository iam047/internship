function delIndex(arr, n) {
    var i = arr.indexOf(n);
    if (i > -1) {
        arr.splice(i, 1);
    }
    return console.log(arr);
}
delIndex([2, 5, 9, 6], 5);
delIndex([2, 5, 9, 6], 6);