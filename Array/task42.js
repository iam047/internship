function add_and_unic(a,b) {
     var c = a.concat(b);
     console.log(c);
     var sort = c.sort();
     var len = sort.length;
     console.log(len);
     console.log(sort);
     while (len--) {
        if (sort[len] == sort[len-1]) {
            sort.splice(len, 1);
        }
    }
    console.log(sort);
};


var arr1 = [1, 4, 5, 6, 7, 3, 'asd'];
var arr2 = [4, 6, 6, 2, 52];

add_and_unic(arr1,arr2);

