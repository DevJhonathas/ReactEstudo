// 1- var, let, const
var y = 10;
var x = 20;

if (y > 9) {
    var x = 5;
    console.log(x);
};
console.log(x); //mostra x com valor 5

let a = 15;
let b = 20;

if (a > 9) {
    let b = 8;
    console.log(b);
};
console.log(b); //mostra b com valor 20

let i = 100
for(let i = 0; i < 5; i++){
    console.log(i)
}
console.log(i);//mostra i com valor 20

function logName(){
    const name = "Jhonathas";
    console.log(name);
};
const name = "Pedro";
logName();
console.log(name);
