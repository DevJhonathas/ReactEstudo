//4- map

const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "bola", price: 12.99, category: "Brinquedos"},
    {name: "Celular", price: 1499.99, category: "Eletronicos"},
    {name: "PS5", price: 4599.99, category: "Eletronicos"},
    {name: "Short", price: 10.99, category: "Roupas"}
];

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true;
    }
});

console.log(products);