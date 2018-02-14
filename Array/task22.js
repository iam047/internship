var a = [1,2,3];
var b = [2,4,5,6];
function addmas(a, b) {
    var c = a.concat(b.filter(i => a.indexOf(i)===-1))
    return console.log(c);
}
addmas(a,b);