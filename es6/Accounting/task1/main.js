 const inventory = [
     {type:   "machine", value: 5000},
     {type:   "machine", value:  650},
     {type:      "duck", value:   10},
     {type: "furniture", value: 1200},
     {type:   "machine", value:   77}
 ];

 let a = inventory.filter(tap => tap.type === "machine");
 const sum1 = a.reduce((prev, elem) => prev + elem.value, 0);
console.log(sum1);