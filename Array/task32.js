function search_elem (arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return console.log(arr);
        }
    }
    return console.log("Немає в масиві");
}
search_elem([2, 5, 9, 6], 5);
search_elem([2, 5, 9, 6], 3);
