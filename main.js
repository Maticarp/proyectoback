class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {

        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Campos obligatorios,intente de nuevo!");
            return;
        }
        if (this.products.some(item => item.code === code)) {
            console.log("No repetir codigo,pruebe con uno diferente!");
            return;
        }
        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log("Producto no encontrado");
        } else {
            console.log("Producto encontrado! ", product);
        }
    }
}

const manager = new ProductManager();


console.log(manager.getProducts());


manager.addProduct("producto prueba", "este es un producto prueba", 1000, "sin imagen", "abc123", 25);


manager.addProduct("Camiseta River Plate", "Camiseta Original", 120000, "sin imagen", "ca1425", 1000);



manager.addProduct("Camiseta Real Madrid", "Camiseta Blanca Original", 500, "sin imagen", "ca912", 1000);

console.log(manager.getProducts());



manager.getProductById(2);
manager.getProductById(2000);