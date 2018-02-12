var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt('Введіть число від 1 до 10');
if (gnum == num) {
    alert('спвівпало')
} else {
    alert('не вгадав ' + num)};