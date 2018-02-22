const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
];

let a = inventory.filter(person => person.type === "machine");
let {a} = a
let sum = a => a.reduce((m, n) => m + n, 0);
//console.log(...a);
console.log(sum);