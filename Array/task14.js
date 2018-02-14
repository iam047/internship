function qwe(arr) {
    arr.sort();
    console.log(arr);
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] == arr[i - 1]) arr.splice( i, 1);
        console.log(arr);
    }
    console.log(arr);
}

qwe([1,1,1,3,4,5,6,6,7,77,54,3,3]);