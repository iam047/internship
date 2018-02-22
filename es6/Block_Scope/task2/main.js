const account = {
    username: "marijn",
    password: "xyzzy"
};
console.log(account);
account.password = "s3cret";
console.log(account);


const account1 = {
    username: "iam",
    password: "fevergame"
};
Object.freeze(account1);
console.log(account1);
console.log(account1.password = '12341241');
console.log(account1);