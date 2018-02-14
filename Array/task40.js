function addmas(start, len){
    var arr = new Array(len);
    for (var i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return console.log(arr);
};
addmas(1, 4);
addmas(-6, 4);