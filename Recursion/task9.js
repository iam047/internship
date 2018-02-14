function sort_fusion (arr) {
    if (arr.length === 1) {
        return arr
    }
    var middle = arr.length / 2;
    var left = arr.slice(0, middle);
    console.log(left);
    var right = arr.slice(middle);
    console.log(right);
    return merge(
        sort_fusion(left),
        sort_fusion(right)
    );
    function merge (left, right) {
        var result = [];
        var indexLeft = 0;
        var indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    };
};

var qwe = [-45,1,32,12,53,21,432,-27,14,24,25];
console.log(sort_fusion(qwe));

/*
function sortvstavka (items) {
    for (var i = 0; i < items.length; i++) {
        var value = items[i];
        for (var j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j]
        }
        items[j + 1] = value
    }
    return asd
}
var asd = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(sortvstavka(asd));
*/