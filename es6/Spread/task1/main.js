function replace(array, from, to, ...elements) {
    array.splice(2, 2, ...elements);
};

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

function copyReplace(array,a ,b,...element) {
    return array.slice(0, 2).concat(element).concat(array.slice(4));
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

let birdsSeen = [];
function recordBirds(time, ...arr) {
    birdsSeen.push({time, birds: arr})
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl");
console.log(birdsSeen);
