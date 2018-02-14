function asd(arr) {
    var sum = 0;
        i = arr.length;
    while (i--)
        sum += Math.pow(arr[i], 2);
    return console.log(sum);
}
asd([2,4,1,4]);
