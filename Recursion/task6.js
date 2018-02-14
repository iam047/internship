 function fib(a) {
     while (a === 1) {
         return [0, 1];
     }
     var a = fib(a - 1);
         a.push(a[a.length - 1] + a[a.length - 2]);
         return a;

 };

console.log(fib(20));

