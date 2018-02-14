function filter(arr) {
    var index = -1;
    var arr_length = arr ? arr.length : 0;
    console.log(arr_length);
    var resIndex = -1;
    var result = [];
    while (++index < arr_length) {
        var value = arr[index];
        if (value) {
            result[++resIndex] = value;
        }
    }
    return console.log(result);
}
filter([0,NaN,'', -2312, '',undefined, 47, null]);