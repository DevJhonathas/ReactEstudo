//6- Desctructuring

//Com arrays
const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1, f3, f2);

// Com objetos
const productDetails = {
    name: "Mouse",
    price: 119.99,
    category: "Periféricos",
    color: "Preto/Branco"
};

const {name: productName, price, category, color: productColor} = productDetails;
console.log(`O nome do produto: ${productName}, valor: R$${price} e se encontra na categoria: ${category} na cor: ${productColor}`);