//8- Classes

class Product {
    constructor(name, price){
        this.name =  name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa de gola", 120);
console.log(`Nome d/peça: ${shirt.name}, Valor: R$${shirt.price}, Total c/desconto: R$${shirt.productWithDiscount(25)}.`);
const tenis = new Product("Tenis Nike Gold", 500);
console.log(`Nome d/peça: ${tenis.name}, Valor: R$${tenis.price}, Total c/desconto: R$${tenis.productWithDiscount(15)}.`);