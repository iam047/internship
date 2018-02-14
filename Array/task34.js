var myArray = [1,3,4,56,6];
min = myArray[0];
max = min;
for (i = 1; i < myArray.length; ++i) {
    if (myArray[i] > max) max = myArray[i];
    if (myArray[i] < min) min = myArray[i];
}
console.log(max);


Math.min.apply(null, [1,3,5,-1,8,0]);
Math.max.apply(null, [1,3,5,-1,8,0]);


