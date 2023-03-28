//2 - arrow function

const sum = function sum(a, b) {
    return a + b;
}

const arrowSun = (a, b) => {
    return a + b;
}

const resumeArrowSun = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSun(5, 5));
console.log(resumeArrowSun(5, 5));


const greeting = (name) => {
    if(name){
        return "Olá " + name + "!";
    } else {
        return "Error!";
    }
}
console.log(greeting("Jhonathas"));
console.log(greeting());

const testeArrow = () => console.log("teste");
testeArrow();


const user = {
    name: "Theo",
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log("Username: " + self.name + " | Versão sem Arrow Fucntion");
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log("Username: " + this.name + " | Versão Arrow Function");
        }, 700);
    }
};
user.sayUserNameArrow()
user.sayUserName()
