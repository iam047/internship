function lonStr(arr1){
    var arr = arr1.concat().sort();
    var a1 = arr[0];
    var a2 = arr[arr.length-1];
    var L = a1.length;
    var i = 0;
    while(i < L && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0, i);
}
console.log(lonStr(['go', 'google']));
console.log(lonStr(['SQLInjection', 'SQLTutorial']));
