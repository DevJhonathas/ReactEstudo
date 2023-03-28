//3 filter

const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
    if(n >= 2){
        return n;
    }
});

console.log(highNumbers);

const users = [
    {name: "Jhonathas", available: true},
    {name: "Renato", available: false},
    {name: "Matheus", available: true},
    {name: "Sheila", available: false},
];

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)
console.log(availableUsers);
console.log(notAvailableUsers);