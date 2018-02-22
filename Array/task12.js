var arr = [1,4,5];
var sum = 0;
var sumMnoj = 1;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
}
for (var i = 0; i < arr.length; i++) {
sumMnoj *= arr[i];
console.log(sumMnoj);
}
console.log(sum, sumMnoj);