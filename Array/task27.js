var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function asd(array, property_key) {
    var arr = [];
       var index = -1;
       var arrlen = array.length;
       var array_items;

    while (++index < arrlen) {
        array_items = array[index];
        if (array_items.hasOwnProperty(property_key)) {
            arr[arr.length] = array_items[property_key];
        }
    }
    return arr;
}
console.log(asd(library, 'title'));
