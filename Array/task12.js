var arr = [1,4,5,6,7,21];
var sum = 0;
var sumMnoj = 1;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
for (var i = 0; i < arr.length; i++) {
sumMnoj *= arr[i];
}
console.log(sum, sumMnoj);