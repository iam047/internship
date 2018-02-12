var a = 5;
var b = 6;
var c = 7;
var p = (a + b + c)/2;
console.log(p);
var answer = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(answer.toFixed(2));