function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.pop() + sum(arr);
    }
}
console.log(sum([1,2,3]));
