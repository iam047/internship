var s = 0;
var arr = Array();
function addmas() {
    arr[s] = document.getElementById("a").value;
    var a = arr[s];
    console.log(("значення елемнта " + arr[s] + "індекс в масиві" + s));
    document.getElementById("result").innerHTML = "значення елемента " + a + " індекс в масиві " + s;
    s++;


}
function show() {
    document.getElementById("resultallarr").innerHTML = arr;
}
