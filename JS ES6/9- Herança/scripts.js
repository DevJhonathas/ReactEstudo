//9- Herença

class Product {
    constructor(name, price){
        this.name =  name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

class ProductWithAttributes extends Product{
    constructor (name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("Cores disponíveis:")
        this.colors.forEach((color) => {
            console.log(color);
        });
    };
};

const shirt = new Product("Camisa de gola", 120);
console.log(`Nome d/peça: ${shirt.name}, Valor: R$${shirt.price}, Total c/desconto: R$${shirt.productWithDiscount(25)}`);

console.log("");

const tenis = new Product("Tenis Nike Gold", 500);
console.log(`Nome d/peça: ${tenis.name}, Valor: R$${tenis.price}, Total c/desconto: R$${tenis.productWithDiscount(15)}.`);

console.log("");

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "Azul", "Verde", "Vermelho", "Rosa"]);
console.log(`Nome d/peça: ${hat.name}, Valor: R$${hat.price}, Total c/desconto: R$${hat.productWithDiscount(25)}`);
hat.showColors();
