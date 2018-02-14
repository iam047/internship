function move(array, from, to) {
    if( to === from ) return array;
    var target = array[from];
    var increment = to < from ? -1 : 1;
    for(var k = from; k != to; k += increment){
        array[k] = array[k + increment];
    }
    array[to] = target;
    return array;
}

console.log(move([1, 2, 3, 4, 5, 6], 4, 1));
