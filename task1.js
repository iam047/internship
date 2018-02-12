(function time () {
var day = new Date();
var nowday = day.getDay();
var allday = ["Неділя","Понеділок","Вівторок","Середа " +
"","Четвер","П*ятниця","Субота"];
console.log("Сьогодні : " + allday[nowday] + ".");
var h = day.getHours();
var m = day.getMinutes();
var s = day.getSeconds();
var t =  ( "Час " + h + ":" + m + ":" + s);
    return console.log(t);

})();