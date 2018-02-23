class SortedArray {
    constructor(compare){
        this.compare = compare;
        this.content = [];
    }

    findPos (elt) {
        this.content.findIndex(item => this.compare(elt, item) < 0);
    }
    insert (elt) {
        this.content.splice(this.findPos(elt), 0, elt)
    }

}

let sorted = new SortedArray((a, b) =>  a - b);
sorted.insert(5);
sorted.insert(1);
console.log("array:", sorted.content);