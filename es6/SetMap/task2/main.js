class MyMap {
    constructor(key, arr){
        this.arr = new Array();
        this.key = new Array();

    }

    set(key,arr){
        this.key = key;
        this.arr = arr;
    }

    get(){

    }

}

let s = new MyMap();
s.set(ada,"arr1231");




// const names = new MyMap;
// names.set(Array, "the array constructor");
// names.set(Math, "the math object");
// console.log(names.get(Array));
// // → "the array constructor"
// console.log(names.size);
// // → 2
// names.delete(Array);
// console.log(names.get(Array));
// // → undefined
// names.clear();
// console.log(names.get(Math));
// // → undefined