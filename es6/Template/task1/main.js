const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}];
let teamNames;
let getPeople =(array) => {
    for (let i in people) {
        teamNames += array[i].name + ", ";
    }
    return teamNames;
};
let ad = people.filter(r => r.role === "senior");


let a = getPeople(people);
let message =`There are ${people.length} people on the ${teamName} team` ;
let name = `Their names are ${people[0].name}, ${people[1].name}, ${people[2].name}, ${people[3].name}.`;
let roles = `${ad.length} of them have a senior role`;

console.log(message);
console.log(name);
console.log(roles);