//7- Spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];
console.log(a4);


//objetos

const carName = {name: 'Gol'};
const carBrand = {brand: 'VW'};
const  otherInfos = {km: 10000, price: 50000};

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4};
console.log(car);